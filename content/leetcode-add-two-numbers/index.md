---
emoji: 📝
title: (leetCode)Add Two Numbers - 타입스크립트
date: '2022-09-16 23:59:00'
author: 조이
tags: 알고리즘 github-pages gatsby
categories: 알고리즘
thumbnail: '../../assets/algorithm.png'
---

> 이번에도 leetCode문제를 풀고 그에 대한 해설을 포스팅해 보도록 하겠습니다. 개인적으로 코딩을 하며 재밌었던 문제였습니다.🥰

## 🤔 문제 설명

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

> 링크드리스트를 이용해서 푸는 문제입니다. 각 노드에는 음수가 아닌 정수를 나타내는 비어 있지 않은 두 연결 리스트들을 줍니다. 각 숫자는 역배열로 저장되어있고 각 리스트의 노드들은 0-9의 숫자를 가지고 있습니다. 두 링크드리스트들이 나타내는 두 숫자를 더하고 그것을 링크드리스트 형태로 반환하면 되는 문제입니다.

## 😲 참고

자세한 사항은 leetCode 공식사이트에서 확인할 수 있다.
[Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

## 💡 코드

```typescript
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(_l1: ListNode | null, _l2: ListNode | null): ListNode | null {
    let __carry = 0;
    let __preNode = new ListNode();
    __preNode.val = 3;
    const __headNode = __preNode;

    while(_l1 || _l2 || __carry){
        let __val1 = 0;
        let __val2 = 0;

        if(_l1){
            __val1 = _l1.val;
            _l1    = _l1.next;
        }
        if(_l2){
            __val2 = _l2.val;
            _l2    = _l2.next;
        }

        let __sum = __val1 + __val2 + __carry;
        const __value = __sum < 10 ? __sum : __sum % 10;
        __carry = __sum < 10 ? 0 : 1;

        const __curNode = new ListNode(__value);
        __preNode.next = __curNode;
        __preNode = __curNode;

    }
    return __headNode.next;

}
```

## 📝 풀이

시작하기 앞서, 기본적으로 Linked List가 클래스로 구현되어있다. 나는 이미 구현되어있는 클래스를 이용하여 문제를 풀 예정이다.

1. 먼저 문제를 풀기 위해 필요한 변수들을 선언해준다.

```typescript
// 1. 변수 선언
let __carry = 0;
let __preNode = new ListNode();
const __headNode = __preNode;
```

- `__carry` → 영어로 받아올림을 의미하며 덧셈하는 과정에 10보다 클 때 다음 값으로 넘겨주기 위하여 사용한다. 예를 들어, 첫 번째 더해줘야 하는 값이 7과8이라면 합이 15이기 때문에 현재 자릿수는 5를 남기고 1은 다음 자릿수의 값으로 넘겨주어야 한다. 그럴 때 사용하기 위한 변수로 사용하였다.
- `__preNode` → while 문에서 ListNode를 이용해서 서로 연결해줄 거기 때문에 반복문이 돌기 전에 먼저 선언해준 변수이다
- `__headNode`→ 말 그대로 head, ListNode의 머리를 의미한다. 본격적으로 Linked List를 이어주기 전에 \_\_headNode를 만들어 맨 위에 리스트 노드로 지정해두기 위하여 사용한다.

2. Linked List를 서로 이어주는 부분입니다.

```typescript
 while(_l1 || _l2 || __carry)
```

- 입력값으로 받은 `_l1`, `_l2` 그리고 올림을 저장하는 `__carry`의 값이 없을 때까지 반복문을 돌려준다.

```typescript
let __val1 = 0;
let __val2 = 0;

if (_l1) {
  __val1 = _l1.val;
  _l1 = _l1.next;
}
if (_l2) {
  __val2 = _l2.val;
  _l2 = _l2.next;
}
```

- 각 `_l1` 과 `l2`의 현재 Linked List의 value 값을 저장하기 위해 변수를 선언한다. (`__val1`,`__val2`)
- 만약 `_l1`가 존재한다면 위에 선언한 `__val1` 값에 value를 저장하고 `_l1`은 다음 Linked List를 가르킨다.
- 만약 `_l2`가 존재한다면 위에 말한 내용을 똑같이 한다.

```typescript
let __sum = __val1 + __val2 + __carry;
const __value = __sum < 10 ? __sum : __sum % 10;
__carry = __sum < 10 ? 0 : 1;

const __curNode = new ListNode(__value);
__preNode.next = __curNode;
__preNode = __curNode;
```

- `__sum` → 현재 자릿수의 합을 저장해주는 역할을 한다. 전의 자릿수가 10 이상이라면 \_\_carry 값이 1이 되어 같이 더해준다.
- `__value` → 현재 자릿수의 값을 계산해주는 역할을 한다. 현재 자릿수가 10 이상이라면 10을 빼준 나머지의 값이 현재 자릿수의 값이 된다.
- `__carry` → 올림을 저장해주는 역할을 한다. 현재 자릿수가 10 이상이라면 1을 저장하여 다음 자릿수가 합을 구할 때 같이 더해주는 역할을 한다.
- 현재 자릿수의 값을 value로 가지는 Linked List를 만들어주고 전의 Linked List의 next 변수에 넣어준다.
- 그런 다음 `__preNod`는 방금 넣어준 현재 자릿수의 값을 value로 가지는 Linked List를 가리키도록 재선언해 준다.
- `_l1` 과 `_l2` 그리고 `__carry`의 값이 아무것도 없을 때까지 반복문을 돌려주며 위에 내용을 반복해준다면 모두 이어지는 Linked List가 만들어진다.

## 🧑🏻‍💻 소감

> Single Linked List에 대해 이해하고 활용하여 간단한 알고리즘을 풀 수 있는지 확인하는 문제였습니다. 처음에는 문자열로 변환하여 처리하여 풀었는데 풀다 보니 문제 제작자의 의도가 그게 아니라는 걸 파악하고 기존 Linked List를 최대한 활용하여 풀었습니다. 정말 근본적인 알고리즘에 대한 지식을 알고 있는지 또 얼마나 활용할 수 있는지에 대한 문제였기에 개인적으로 풀면서도 마음에 들었던 문제였습니다.😁
> <br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**
