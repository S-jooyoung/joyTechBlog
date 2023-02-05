---
emoji: 📚
title: (알고리즘) 정렬 알고리즘 - JavaScript
date: '2022-07-10 23:42:00'
author: 키맨
tags: 알고리즘 github-pages gatsby
categories: 알고리즘
thumbnail: '../../assets/algorithm.png'
---

> 기본적인 정렬 알고리즘의 원리를 파악하고 어떤 식으로 구현할 수 있는지 알아봅시다.🧑🏻‍💻

## 선택 정렬이란?🧐

`선택 정렬`이란 이름 그대로 현재 위치에 들어갈 값을 찾아 정렬하는 배열이다.

### 선택 정렬 기본로직

- 정렬되지 않은 인덱스의 맨 앞에서부터, 이를 포함한 그 이후의 배열 값 중 가장 작은 값을 찾아간다.
- 가장 작은 값을 찾으면, 그 값을 현재 인덱스와 값과 바꿔준다.
- 다음 인덱스에서 위 과정을 반복해 준다.

> 선택 정렬 알고리즘은 n-1개, n-2개... 1개 비교하므로 시간 복잡도는 `O(n^2)입니다.`

![](https://velog.velcdn.com/cloudflare/jooyoung/4821fc59-6a5c-4293-ac6f-011607062893/%E1%84%89%E1%85%A5%E1%86%AB%E1%84%90%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%A7%E1%86%AF.gif)

### 선택정렬 JavaSscipt 코드

```javascript
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
```

## 삽입 정렬이란?🧐

`삽입 정렬`이란 현재 위치에서, 그 이하의 배열들을 비교하여 자신이 들어갈 위치를 찾아, 그 위치에 삽입하는 배열 알고리즘이다.

> 선택 정렬과 같은 시간 복잡도 `O(n^2)`을 가지고 있지만 현재 위치에서 왼쪽 배열만을 탐색하기 때문에 더 효율적인 정렬이라고 할 수 있습니다.

### 삽입 정렬 기본로직

- 삽입 정렬은 두 번째 인덱스부터 시작한다. 현재 인덱스는 별도의 변수에 저장해 주고, 비교 인덱스를 현재 인덱스의 직전(-1)로 잡는다.
- 별도로 저장해 준 `삽입을 위한 변수`와, `비교 인덱스의 배열 값`을 비교한다.
- `삽입 변수의 값이 더 작으면` 비교 인덱스+1에 비교 인덱스의 값을 저장해 주고, 비교 인덱스를 -1 하여 비교를 반복한다.
- 만약 `삽입 변수가 더 크면`, 비교 인덱스+1에 삽입 변수를 저장한다.

![](https://velog.velcdn.com/cloudflare/jooyoung/714963b0-98eb-46ae-986f-d12432e7ecb7/%E1%84%89%E1%85%A1%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%A7%E1%86%AF.gif)

### 선택정렬 JavaSscipt 코드

```javascript
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
```

## 버블 정렬이란?🧐

`버블 정렬` 매번 연속된 두 개 인덱스를 비교하여, 정한 기준의 값을 뒤로 넘겨 정렬하는 방법이다.

### 버블 정렬 기본로직

- 버블 정렬은 현재 인덱스 값과. 바로 이후의 인덱스 값을 비교한다.
- `현재 인덱스가 더 크면`, 이후의 인덱스와 바꿔준다.
- `이후의 인덱스가 더 크면`, 교환하지 않고 다음 두 연속된 배열 값을 비교한다.
- 이를 (전체 배열의 크기 -현재까지 순환한 바퀴 수)만큼 반복한다.

![](https://velog.velcdn.com/cloudflare/jooyoung/37c3e9fd-cb2e-4bac-8195-398745858dbc/%E1%84%87%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%A7%E1%86%AF.gif)

### 버블 정렬 JavaSscipt 코드

```javascript
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

let arr = [23, 11, 13, 7, 23, 15];
console.log(solution(arr));
```

## 마치며 🧑🏻‍💻

글을 마치며, 코딩 테스트 문제를 보았을 때 어떤 알고리즘으로 풀면 효율적일지 시간 복잡도는 어떤 방식이 더 좋을지 생각하며 문제를 푸는 모두가 됩시당! 🧑🏻‍💻

<br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**

```toc

```
