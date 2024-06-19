---
emoji: 📝
title: (leetCode)Search in Rotated Sorted Array - 타입스크립트
date: '2022-09-19 23:55:00'
author: 키맨
tags: 알고리즘 github-pages gatsby
categories: 알고리즘
thumbnail: '../../assets/algorithm.png'
---

> 이번에도 리드 코드의 문제를 들고 왔습니다. 부쩍 알고리즘 문제를 많이 포스팅하고 있는데요. 다음에는 현재 작업 중인 프로젝트를 진행하며 생겼던 문제에 관하여 포스팅해보도록 할 테니 기대해주세요 🥰

## 🤔 문제 설명

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

> 오름차순으로 정렬된 배열이 특정 지점에서 회전되어 있다고 가정해봅시다. 회전하는 축은 알려지지 않았습니다. 예를 들어 . `[0, 1.2, 3, 4, 5, 6]` 은 회전하는 축에 따라 `[4, 5, 6, 7, 0, 1.2]` 가 될 수 있습니다. 입력값으로 주어진 타깃값을 배열 내에서 찾아 돌려보내고 만약에 배열 내에 존재하지 않는다면 `-1`을 돌려보냅니다.

## 😲 참고

자세한 사항은 leetCode 공식사이트에서 확인할 수 있다.
[33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## 💡 코드

```typescript
function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let middle: number = 0;

  // 사전에 처리할수 있는 값을 먼저 처리
  if (nums.length === 1 && nums[0] !== target) return -1;

  while (left <= right) {
    middle = Math.ceil((left + right) / 2);

    // 만약 중간값이 타겟값과 같다면 리턴
    if (nums[middle] === target) return middle;

    // 중간인덱스로 부터 왼쪽이 정렬 되있는지 확인 && 오른쪽이 정렬 되있는지 확인
    if (nums[left] < nums[middle]) {
      // 왼쪽에 타겟값이 포함되어 있는지 확인
      if (nums[left] <= target && target <= nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 오른쪽에 타겟값이 포함되어 있는지 확인
      if (nums[middle] <= target && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}
```

## 📝 풀이

배열을 하나씩 돌아가며 찾으면 타깃값의 위치를 찾을 수 있지만 해당 문제는 시간복잡도를 `logN`으로 규정하고 있다. `logN`을 보자마자 생각하신 분들도 있을 텐데 그렇다. 이분탐색을 이용해서 찾는다면 시간복잡도를 지킬 수 있을 것이다.

1. 배열의 길이값이 1이고 해당 값이 타깃값이 아니라면 반복문을 굳이 돌릴 필요 없기 때문에 사전에 값을 처리해준다.

```typescript
// 사전에 처리할수 있는 값을 먼저 처리
if (nums.length === 1 && nums[0] !== target) return -1;
```

2. 회전하는 축을 기준으로 왼쪽과 오른쪽은 정렬되어있다는 것을 포인트로 문제를 풀어간다.

```typescript
// 중간인덱스로 부터 왼쪽이 정렬 되있는지 확인 && 오른쪽이 정렬 되있는지 확인
if (nums[left] < nums[middle]) {
  // ***
} else {
  // ***
}
```

3. 각 조건문에 타깃값이 포함되어있는지 확인하여 준다.

```typescript
// 왼쪽에 타겟값이 포함되어 있는지 확인
if (nums[left] <= target && target <= nums[middle]) {
  right = middle - 1;
} else {
  left = middle + 1;
}

// 오른쪽에 타겟값이 포함되어 있는지 확인
if (nums[middle] <= target && target <= nums[right]) {
  left = middle + 1;
} else {
  right = middle - 1;
}
```

4. 그다음으로는 흔히 우리가 아는 이진탐색을 통하여 `left` 값과 `right` 값을 바꿔주며 원하는 타깃값의 인덱스를 구한다.

5. `left` 값이 `right`와 같아질 때까지 반복문이 돌았음에도 타깃의 인덱스값을 찾지 못했다면 해당 배열에는 정답이 없기 때문에 `-1`을 돌려보낸다.

```typescript
while (left <= right) {
  // ***
}
return -1;
```

## 🧑🏻‍💻 소감

> 처음 문제 해석할 때 이해가 되질 않아 고민했던 문제였습니다. (영어가 부족한가 봐요😭)회전하는 축을 기준으로 왼쪽과 오른쪽은 이미소팅돼 있다는 것! 이진탐색을 활용하면된다는 것을잡고 나서는 평이한 문제였습니다.leetCode에서 좋아요가 많은 문제라 풀어봤었는데 다음번에는 조금 더 생각을많이 해야 하고 창의적인 문제를 가져와 보도록 하겠습니다.😁

<br/>
