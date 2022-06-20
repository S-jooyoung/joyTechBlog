---
emoji: 📝
title: (프로그래머스 Lv.2) 거리두기 확인하기 - 자바스크립트
date: '2022-06-20 23:30:00'
author: 키맨
tags: ALGORITHM github-pages gatsby
categories: ALGORITHM
---

> 지금부터 코딩테스트를 연습하며 괜찮았던 문제들을 포스팅해 보려고 한다. 한 번에 많은 시간을 할애하지는 못하지만, 꾸준히 공부하며 알고리즘 카테고리를 채워나가 보겠다. 🥰.

<img src = "https://blog.kakaocdn.net/dn/tTyNR/btri4448gmJ/WDioiw2PNFmZjqjaLU58Vk/img.png" >

## 🤔 문제 설명

개발자를 희망하는 죠르디가 카카오에 면접을 보러 왔습니다.
코로나 바이러스 감염 예방을 위해 응시자들은 거리뤄 둬서 대기를 해야하는데 개발 직군 면접인 만큼 아래와 같은 규칙으로 대기실에 거리를 두고 앉도록 안내하고 있습니다.

> 1. 대기실은 5개이며, 각 대기실은 5x5 크기입니다.
> 2. 거리두기를 위하여 응시자들 끼리는 맨해튼 거리가 2 이하로 앉지 말아 주세요.
> 3. 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.

## 😲 참고

자세한 사항은 프로그래머스 공식사이트에서 확인할 수 있다.
[프로그래머스-거리두기 확인](https://programmers.co.kr/learn/courses/30/lessons/81302?language=javascript)

## 💡 코드

```javascript
function solution(places) {
  const answer = [];
  const MOVE = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const SIZE = 5;

  //유효성 검사
  const isValid = (x, y) => x >= 0 && y >= 0 && x < SIZE && y < SIZE;
  const isAvailableSeat = (x, y, checked) => {
    if (isValid(x, y) && checked[x][y] === 0) return true;
    return false;
  };

  //BFS
  const BFS = (start, room, checked) => {
    let queue = [start];
    while (queue.length > 0) {
      const [x, y, n] = queue.shift();

      if (n !== 0 && room[x][y] === 'P') return false;

      MOVE.forEach(([mx, my]) => {
        const _x = x + mx;
        const _y = y + my;

        if (isAvailableSeat(_x, _y, checked) && room[_x][_y] !== 'X') {
          if (n < 2) {
            checked[_x][_y] = 1;
            queue.push([_x, _y, n + 1]);
          }
        }
      });
    }
    return true;
  };

  const checkDistancing = (room) => {
    let checked = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (room[i][j] !== 'P') continue;

        checked[i][j] = 1;
        if (!BFS([i, j, 0], room, checked)) return 0;
      }
    }
    return 1;
  };

  return places.map(checkDistancing);
}
```

### 📝 풀이

이 문제는 거리 2 이내에 다른 사람이 있는 정점이 있는지를 검사하면 되는 문제이다. 그렇다면 DFS, BFS로 풀 수 있을 거 같다. 이번에는 BFS로 풀어 보겠다.

```javascript
const checkDistancing = (room) => {
  let checked = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (room[i][j] !== 'P') continue;

      checked[i][j] = 1;
      if (!BFS([i, j, 0], room, checked)) return 0;
    }
  }
  return 1;
};
```

1. `checkDistancing`은 이중 for문을 사용하여 `places` 에서 `P`를 찾아 `BFS()`함수에 넣어주는 함수이다.

2. `checked[i][j]` 는 BFS탐색 시 방문 여부를 체크해주기 위해서 사용하였다.

```javascript
//BFS
const BFS = (start, room, checked) => {
  let queue = [start];
  while (queue.length > 0) {
    const [x, y, n] = queue.shift();

    if (n !== 0 && room[x][y] === 'P') return false;

    MOVE.forEach(([mx, my]) => {
      const _x = x + mx;
      const _y = y + my;

      if (isAvailableSeat(_x, _y, checked) && room[_x][_y] !== 'X') {
        if (n < 2) {
          checked[_x][_y] = 1;
          queue.push([_x, _y, n + 1]);
        }
      }
    });
  }
  return true;
};
```

3. bfs 탐색을 위한 `queue`를 만들고 시작점을 넣어준다.

4. 탐색 중 다른 `P`를 만나면 바로 `false`를 리턴하여 반복문을 빠져나온다. 시작점은 항상 `P`이기 때문에 `n !== 0` 조건을 추가하였다.

5. 시작점에서 상,하,좌,우를 탐색한다.

```javascript
//유효성 검사
const isValid = (x, y) => x >= 0 && y >= 0 && x < SIZE && y < SIZE;
const isAvailableSeat = (x, y, checked) => {
  if (isValid(x, y) && checked[x][y] === 0) return true;
  return false;
};
```

6. 범위를 벗어나지 않고, 아직 방문하지 않은 곳이면서 방문 표시를 하고 `queue`에 넣어준다.

7. `queue`가 비워지고 반복문을 통과했다면, 거리두기를 준수했다는 의미이므로 `true`를 리턴한다.

<br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**

```toc

```
