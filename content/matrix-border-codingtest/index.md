---
emoji: 📝
title: (프로그래머스 Lv.2) 행렬 테두리 회전하기 - 자바스크립트
date: '2022-06-25 23:30:00'
author: 키맨
tags: ALGORITHM github-pages gatsby
categories: ALGORITHM
---

> 이번에는 2021 Dev-matching: 웹 백엔드 개발자(상반기)에 낸 문제의 풀이를 포스팅해 보도록 하겠습니다. 간단하게 for 문과 stack을 사용하여 해결하였는데 더 좋은 풀이가 있으시다면 밑에 댓글로 알려주시면 감사하겠습니다. 🥰

<img src = "https://blog.kakaocdn.net/dn/tTyNR/btri4448gmJ/WDioiw2PNFmZjqjaLU58Vk/img.png" >

## 🤔 문제 설명

rows x columns 크기인 행렬이 있습니다. 행렬에는 1부터 rows x columns까지의 숫자가 한 줄씩 순서대로 적혀있습니다. 이 행렬에서 직사각형 모양의 범위를 여러 번 선택해, 테두리 부분에 있는 숫자들을 시계방향으로 회전시키려 합니다. 각 회전은 (x1, y1, x2, y2)인 정수 4개로 표현하며, 그 의미는 다음과 같습니다.

> x1 행 y1 열부터 x2 행 y2 열까지의 영역에 해당하는 직사각형에서 테두리에 있는 숫자들을 한 칸씩 시계방향으로 회전합니다.

## 😲 참고

자세한 사항은 프로그래머스 공식사이트에서 확인할 수 있다.
[프로그래머스-행렬 테두리 회전하기](https://programmers.co.kr/learn/courses/30/lessons/77485?language=javascript)

## 💡 코드

```javascript
function solution(rows, columns, queries) {
  const answer = [];
  let arr = Array.from({ length: rows + 1 }, () => Array(columns + 1).fill(0));

  // 값 채우기
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) arr[i][j] = (i - 1) * columns + j;
  }

  // 스택에 선택된 값 넣기
  for (let tc = 0; tc < queries.length; tc++) {
    const [x1, y1, x2, y2] = queries[tc];
    const stack = [];

    // 위 직사각형 담기
    for (let i = y1; i < y2; i++) stack.push(arr[x1][i]);
    // 오른 직사각형 담기
    for (let i = x1; i < x2; i++) stack.push(arr[i][y2]);
    // 아래 직사각형 담기
    for (let i = y2; i > y1; i--) stack.push(arr[x2][i]);
    // 왼쪽 직사각형 담기
    for (let i = x2; i > x1; i--) stack.push(arr[i][y1]);

    // 정닶값 찾기
    answer.push(Math.min(...stack));

    // 시계방향으로 한 칸 움직이기
    let temp = stack.pop();
    stack.unshift(temp);

    // 위 직사각형 담기
    for (let i = y1; i < y2; i++) arr[x1][i] = stack.shift();
    // 오른 직사각형 담기
    for (let i = x1; i < x2; i++) arr[i][y2] = stack.shift();
    // 아래 직사각형 담기
    for (let i = y2; i > y1; i--) arr[x2][i] = stack.shift();
    // 왼쪽 직사각형 담기
    for (let i = x2; i > x1; i--) arr[i][y1] = stack.shift();
  }

  return answer;
}
```

## 📝 풀이

이 문제는 해당하는 영역을 특정하고 그 값에서 가장 작은 값을 찾으면 되는 문제이다. Stack을 활용하여 값을 특정하고 shift를 하여 시계방향으로 회전하는 식으로 구현하겠다.

```javascript
const answer = [];
let arr = Array.from({ length: rows + 1 }, () => Array(columns + 1).fill(0));

// 값 채우기
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) arr[i][j] = (i - 1) * columns + j;
}
```

1. 숫자 1부터 `columns * rows` 크기만큼 행렬을 만든다.

```javascript
// 위 직사각형 담기
for (let i = y1; i < y2; i++) stack.push(arr[x1][i]);
// 오른 직사각형 담기
for (let i = x1; i < x2; i++) stack.push(arr[i][y2]);
// 아래 직사각형 담기
for (let i = y2; i > y1; i--) stack.push(arr[x2][i]);
// 왼쪽 직사각형 담기
for (let i = x2; i > x1; i--) stack.push(arr[i][y1]);

// 정닶값 찾기
answer.push(Math.min(...stack));
```

2. [x1, y1, x2, y2] 를 이용하여 target값을 stack에 넣어주고 해당 값에서 최소값을 구한다.

```javascript
// 시계방향으로 한 칸 움직이기
let temp = stack.pop();
stack.unshift(temp);

// 위 직사각형 담기
for (let i = y1; i < y2; i++) arr[x1][i] = stack.shift();
// 오른 직사각형 담기
for (let i = x1; i < x2; i++) arr[i][y2] = stack.shift();
// 아래 직사각형 담기
for (let i = y2; i > y1; i--) arr[x2][i] = stack.shift();
// 왼쪽 직사각형 담기
for (let i = x2; i > x1; i--) arr[i][y1] = stack.shift();
```

3. `queries`가 한번 끝나면 시계방향으로 회전하기 위하여 stack에 담긴 값에 맨 뒤를 빼주고 맨 앞에 값을 넣어준다.
4. 스택에 값을 다시 행렬에 넣어준다.

<br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**

```toc

```
