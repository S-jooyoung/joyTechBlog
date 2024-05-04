---
emoji: 📝
title: (leetCode)Divide Two Integers - 타입스크립트
date: '2022-09-18 10:51:00'
author: 키맨
tags: 알고리즘 github-pages gatsby
categories: 알고리즘
thumbnail: '../../assets/algorithm.png'
---

> 이번에도 리드 코드의 문제를 들고 왔습니다.😁 간단해 보이지만 시간복잡도와제약조건 등을을 고려해서풀어야 하는는문제였습니다다. 바로문제 풀이로로 이동해 봅시다.

## 🤔 문제 설명

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

> 두 정수를 나누면 되는 간단한 문제입니다. 하지만 기존의 operation을 사용하면 안 되는 제약조건이 있습니다. 나눈 값을 몫을 결괏값으로 출력하면 되는 문제입니다.

## 😲 참고

자세한 사항은 leetCode 공식사이트에서 확인할 수 있다.
[29. Divide Two Integers](https://leetcode.com/problems/divide-two-integers/description/)

## 💡 코드

```typescript
/**
 * Divide Two Integers
 * 73 ms, 44.7 MB
 */
function divide(_dividend: number, _divisor: number): number {
  let __sign = (_dividend < 0 || _divisor < 0) && !(_dividend < 0 && _divisor < 0) ? -1 : 1,
    __counter = 0,
    __sth = 1;

  _dividend = Math.abs(_dividend);
  _divisor = Math.abs(_divisor);

  if (_divisor === 1) {
    if (_dividend >= Math.pow(2, 31) - 1 && __sign > 0) return Math.pow(2, 31) - 1;

    if (_dividend >= Math.pow(2, 31) && __sign < 0) return Math.pow(-2, 31);
  }

  let __subtract = _divisor;

  while (true) {
    if (_dividend >= __subtract) {
      __counter += __sth;
      __sth += __sth;
      _dividend -= __subtract;
      __subtract += __subtract;
      if (__counter > Math.pow(2, 31)) break;
    } else {
      if (__sth > 1) {
        __sth = 1;
        __subtract = _divisor;
      } else {
        break;
      }
    }
  }

  if (__counter * __sign >= Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (__counter * __sign <= Math.pow(-2, 31)) return Math.pow(-2, 31);

  return __counter * __sign;
}
```

## 📝 풀이

기본적으로 모듈러 연산자를 이용할 수 없기 때문에 단순한 뺄셈으로 진행하고 속도를 높이기 위해 수열을 이용하여 결괏값을 도출하도록 하였다.

1. 결괏값이 양수인지 음수인지 먼저 계산해주고 진행하는 게 편할 거 같아 `__sign` 변수를 선언하여 계산하여 주고 나머지 필요한 변수들을 선언해주었다.

```typescript
let __sign = (_dividend < 0 || _divisor < 0) && !(_dividend < 0 && _divisor < 0) ? -1 : 1,
  __counter = 0,
  __sth = 1;

if (__counter * __sign >= Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
if (__counter * __sign <= Math.pow(-2, 31)) return Math.pow(-2, 31);
```

2. 제약조건에 맞추어 값을 구하기 전에 해당 요구사항을 먼저 구현하였다.

```typescript
if (_divisor === 1) {
  if (_dividend >= Math.pow(2, 31) - 1 && __sign > 0) return Math.pow(2, 31) - 1;

  if (_dividend >= Math.pow(2, 31) && __sign < 0) return Math.pow(-2, 31);
}
```

3. 나누기해주는 중요 로직 부분이다. 일반적으로 구현한다고 생각하면 반복문을 돌려 하나씩 숫자를 빼며 카운팅 해주는 방법도 있지만 숫자가 `2^31`까지의 값이라면 너무 오래 걸릴 것으로 예상되어 등비수열을 이용하여 로직을 구성하였다.

```typescript
while (true) {
  if (_dividend >= __subtract) {
    __counter += __sth;
    __sth += __sth;
    _dividend -= __subtract;
    __subtract += __subtract;
    if (__counter > Math.pow(2, 31)) break;
  } else {
    if (__sth > 1) {
      __sth = 1;
      __subtract = _divisor;
    } else {
      break;
    }
  }
}
```

## 🧑🏻‍💻 소감

> 처음 구현하였을때는 단순히 숫자를 빼주면서 카운팅하는 방식으로 구현하였었는데 속도가 `10717 ms` 걸렸습니다. 😭 수열을 사용하여 풀었더니 시간복잡도를 많이 줄일 수 있었습니다. 이번기회에 시간이 조금 더 걸린다고 하더라도 구현하기전에 조금 더 효율적인 방식을 고민하고 진행하면 좋겠다는 생각을 하였습니다.

<br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**
