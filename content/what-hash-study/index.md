---
emoji: 📚
title: (알고리즘) 해시(Hash) 알고리즘
date: '2022-07-11 23:30:00'
author: 조이
tags: 알고리즘 github-pages gatsby
categories: 알고리즘
thumbnail: '../../assets/algorithm.png'
---

> 막연하게 해시 알고리즘의 원리를 알지 못하고 코딩 테스트를 준비하면서 부족함을 느껴 여러 자료들을 모아 정리했습니다.🧑🏻‍💻

## 해시(Hash)함수란?🧐

`해시 함수`란 데이터의 효율적 관리를 목적으로 임의의길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수입니다. 이때 매핑 전 원래 데이터의 값을 `키(key)`, 매핑 후 데이터의 값을 `해시값(hash value)`, 매핑하는 과정 자체를 `해싱(hashing)`라고 한다.

![](https://images.velog.io/images/jooyoung/post/0d43e3b0-23ff-4a46-b052-aa7325d85bf8/image.png)

## 해시(Hash) 테이블이란?🤔

해시 함수를 사용하여 키를 해시값으로 매핑하고, 이 해시값을 색인(index)혹은 주소 삼아 데이터의 값(value)을 키와 함께 저장하는 자료구조를 `해시테이블(hash table)`이라고 한다. 이때 저장되는 곳을 `버킷(bucket)` 또는 `슬롯(slot)`이라고 한다.

![](https://images.velog.io/images/jooyoung/post/8abc9bfd-e267-4dc7-be05-ad26777ee860/EMW1YZP.png)

## 해시(Hash) 테이블 예제💡

이해를 돕기 위해 예를 들어 보겠다. 스타벅스의 메뉴를 `배열`에 저장한다고 생각하면

```javascript
menu = [
  { name: 'americano', price: 4000 },
  { name: 'cappuccino', price: 4500 },
  { name: 'vanilla latte', price: 5000 },
  { name: 'espresso', price: 4000 },
];
```

이런 식으로 나올 것이다. 바닐라라떼가 먹고 싶어 가격을 알고 싶다면 Linear Search(선형검색)을 하여 하나하나 찾아봐야한다. 지금은 4개의 메뉴밖에 없어서 괜찮지만 메뉴가 100개 1000개가 된다면 시간은 점점 더 오래 걸릴 것이다. 시간 복잡도는 `O(n)`이다.

그렇다면 이 메뉴판을 `해시테이블(hash table)`로 만들어 보겠다.

```javascript
menu = {
  americano: 4000,
  cappuccino: 4500,
  vanillaLatte: 5000,
  espresso: 4000,
};
```

이렇게 해시테이블로 메뉴판을 만들게 되면 `"vanillaLatte"`는 Key가 될 것이기에 `menu.americano`를 사용하여 바로 찾을 수 있다.👍🏻 시간복잡도는 `O(1)`이다.

## 해시(Hash) 충돌 💣

해시값에 이미 키가 있지만 해시 함수를 거쳐 또 다른 키값이 들어왓을 때 `해시(Hash) 충돌`이라고 부른다.

![](https://images.velog.io/images/jooyoung/post/942a8ecc-4192-4a09-80db-2165cbe14e61/7PTT8dT.png)

### 체이닝(chaining)

해시 충돌을 해결하는 방법 중 하나로 `위의 그림처럼` 한 버킷당 들어갈 수 있는 엔트리의 수에 제한을 두지 않음으로써 모든 자료를 해시테이블에 담는 것이다. 해당 버킷에 데이터가 이미 있다면 체인처럼 노드를 추가하여 다음 노드를 가리키는 방식으로 구현하면 된다.

<br/>

**궁금하신 점이 있다면 아래 `댓글`로 남겨주세요!👇**

```toc

```
