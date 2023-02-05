---
emoji: 📝
title: (Next.js) 오픈소스 간략한 코드 분석
date: '2022-10-07 15:39:00'
author: 키맨
tags: 개발 github-pages gatsby
categories: 개발
thumbnail: './thumbnail.png'
---

> 요즘 프론트엔드 개발자에게 거의 필수적이라고 할 수가 있는 Next.js에 대하여 오픈소스 코드들을 분석해보면서 어떤 식으로 구현되어 있는지 간략하게 파악해본 글들을 포스팅하도록 하겠습니다.🥰

## 🤔 yarn start 스크립트를 실행하였을 때 돌아가는 로직

`yarn start`를 실행하였을 때 `package.json`의 스크립트가 실행된다. 기본적으로 start는 next start가 실행되게 되어있다.

### `packages/next/cli/next-start.ts` 부분

`next start`가 실행되면 맨 처음 실행되는 부분이다.

```typescript
startServer({
  dir,
  hostname: host,
  port,
  keepAliveTimeout,
})
  .then(async (app) => {
    const appUrl = `http://${app.hostname}:${app.port}`;
    Log.ready(`started server on ${host}:${app.port}, url: ${appUrl}`);
    await app.prepare();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
```

`next start`가 실행되면 명령어에 따라 처리해주고 위에 부분에서 현재 경로와 호스트이름, 포트 번호 등을 넣어서 서버를 실행해주는 거 같다. `startServer`는 어떻게 구현되어 있는지 확인해 보아야겠다.

### `packages/next/server/lib/start-server.ts` 부분

```typescript
return new Promise<NextServer>((resolve, reject) => {
  let port = opts.port;
  let retryCount = 0;

  server.on('error', (err: NodeJS.ErrnoException) => {
    if (port && opts.allowRetry && err.code === 'EADDRINUSE' && retryCount < 10) {
      warn(`Port ${port} is in use, trying ${port + 1} instead.`);
      port += 1;
      retryCount += 1;
      server.listen(port, opts.hostname);
    } else {
      reject(err);
    }
  });

  let upgradeHandler: any;

  if (!opts.dev) {
    server.on('upgrade', (req, socket, upgrade) => {
      upgradeHandler(req, socket, upgrade);
    });
  }

  server.on('listening', () => {
    const addr = server.address();
    const hostname = !opts.hostname || opts.hostname === '0.0.0.0' ? 'localhost' : opts.hostname;

    const app = next({
      ...opts,
      hostname,
      customServer: false,
      httpServer: server,
      port: addr && typeof addr === 'object' ? addr.port : port,
    });

    requestHandler = app.getRequestHandler();
    upgradeHandler = app.getUpgradeHandler();
    resolve(app);
  });

  server.listen(port, opts.hostname);
});
```

정확히는 모르겠지만 `next-start.ts`에서 받아온 값들을 이용하여 이미 포트 번호가 사용 중이거나 시간초과, 시도 횟수 초과 등일 때 오류를 내보내고 업그레이드해주고 값에 따라 핸들링해주고 있다. 결국 정상적으로 되었을 때 `next`에 다시 전달하는 거로 보여 이 부분도 확인해 보아야겠다.

### `packages/next/server/next.ts` 부분

```typescript
    const getServerImpl = async () => {
    if (ServerImpl === undefined)
        ServerImpl = (await Promise.resolve(require('./next-server'))).default
    return ServerImpl
    }

    private async createServer(options: DevServerOptions): Promise<Server> {
    if (options.dev) {
        const DevServer = require('./dev/next-dev-server').default
        return new DevServer(options)
    }
    const ServerImplementation = await getServerImpl()
    return new ServerImplementation(options)
    }
```

`createServer`가 실제로 서버를 만들어 주는 부분인 거 같다. 옵션이 dev라면 devServer가 그렇지 않다면 getServerImpl로 가게 된다. getServerImpl은 `./next-server`를 사용하니까 이 부분도 확인해보아야 할 거 같다.

### `packages/next/server/next-server`

어휴 이 부분은 코드가 2,000줄이 넘는다. 코드를 천천히 조금 확인해본 결과 파일경로 같은 것도 설정해주는 게 있고 특히 눈에 띄는 `renderHTML`함수를 발견하였다. 말 그대로 HTML로 렌더링해주는 부분이 아닐까 확인해보자.

```typescript
  protected async renderHTML(
    req: NodeNextRequest,
    res: NodeNextResponse,
    pathname: string,
    query: NextParsedUrlQuery,
    renderOpts: RenderOpts
  ): Promise<RenderResult | null> {
    // Due to the way we pass data by mutating `renderOpts`, we can't extend the
    // object here but only updating its `serverComponentManifest` field.
    // https://github.com/vercel/next.js/blob/df7cbd904c3bd85f399d1ce90680c0ecf92d2752/packages/next/server/render.tsx#L947-L952
    renderOpts.serverComponentManifest = this.serverComponentManifest
    renderOpts.serverCSSManifest = this.serverCSSManifest
    renderOpts.fontLoaderManifest = this.fontLoaderManifest

    if (this.hasAppDir && renderOpts.isAppPath) {
      return appRenderToHTMLOrFlight(
        req.originalRequest,
        res.originalResponse,
        pathname,
        query,
        renderOpts
      )
    }

    return renderToHTML(
      req.originalRequest,
      res.originalResponse,
      pathname,
      query,
      renderOpts
    )
  }
```

`renderToHTML`을 리턴한다. 이것 또한 import 된 거라 확인이 필요해 보인다.

### `packages/next/server/render.tsx` 부분

```typescript
const Body = ({ children }: { children: JSX.Element }) => {
  return inAmpMode ? children : <div id="__next">{children}</div>;
};
```

여기서 정말 반가운 친구를 만났다. `__next` next.js로 만들었을 때 제일 상위 div 태그이다. 실제로 이 코드에서 HTML로 렌더링해 주는 거 같다.

## 🧑🏻‍💻 소감

> 사실 오픈소스를 이렇게 하나하나 열어보며 찾아본 적이 거의 없었던 거 같습니다. 또한 대략적인 큰 틀 정도만 이해하였고 세부적인 것들을 이해하기 어려웠습니다. 이번 기회에 오픈소스 보는 시간도 늘리고 저의 목표 중 하나인 `오픈소스에 기여하기`를 꼭 해보도록 하겠습니다.

 <br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**

```toc

```
