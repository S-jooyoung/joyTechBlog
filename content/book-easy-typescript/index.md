---
emoji: 🧑🏻‍💻
title: 쉽게 시작하는 타입스크립트, 쉽지만 꽉찬 입문서
date: '2023-07-18 23:38:00'
author: 조이
tags: 서평 github-pages gatsby
categories: 서평
thumbnail: './thumbnail.png'
---

안녕하세요! 오랜만에 글을 남기는 것 같네요. 최근 회사 프로젝트에 집중하느라 글쓰기에 소홀해진 것 같아요. 이번 포스팅에서는 캡틴 판교라는 닉네임으로 유명한 장기효님이 쓴 '쉽게 시작하는 타입스크립트'라는 책의 서평을 작성해보려고 합니다.

요즘 프론트엔드 개발자들은 자바스크립트보다 정적 타입을 지원하는 타입스크립트를 많이 사용하고 있는데요. 타입스크립트는 컴파일 단계에서 오류를 잡을 수 있고 타입을 명확하게 지정하여 가독성과 예측 가능성을 높일 수 있기 때문에 인기를 끌고 있습니다.

저 또한 현재 실무에서 Next.js 프레임워크와 함께 타입스크립트를 사용하고 있는데요. 하지만 자주 사용하는 기능들만 익숙해지고, 알고 있지만 자주 사용하지 않는 기법들은 잊혀지는 경향이 있습니다.

그래서 이번에 타입스크립트를 다시 기초부터 복습하고자 최근에 출간된 '쉽게 시작하는 타입스크립트'라는 책을 찾게 되었습니다. 오늘 이 포스트에서는 이 책에 대한 간략한 내용을 소개하고 제 경험과 느낀 점을 공유하려고 합니다.

이번 포스트가 타입스크립트를 공부하려는 분들에게 도움이 되었으면 좋겠습니다.

## 책 소개

이 책은 19개의 장(chapter)로 구성되어 있어서 타입스크립트의 거의 모든 문법을 다루는 책입니다. 처음부터 타입스크립트가 무엇인지, 왜 배워야 하는지, 타입스크립트에 대한 개념부터 시작해서 실습을 통해 이해를 돕는 내용까지 포함하고 있습니다.

책에서는 타입스크립트의 개념을 설명할 때 예제를 활용하여 설명하는 부분이 많은데, 이렇게 예제를 통해 설명함으로써 실제로 어떻게 적용하는지를 명확하게 보여줍니다.

또한, 이 책에서는 각 개념이 끝날 때마다 실습 부분을 제공합니다. 이 실습은 단순히 실습 내용만을 다루는 것이 아니라, 실습을 위한 환경 설정부터 자세하게 안내합니다. 처음으로 타입스크립트를 사용해보려는 분들은 환경 설정이 어려울 수 있는데, 이 책에서는 이러한 어려움을 고려하여 섬세하게 설명하고 있습니다. 이런 점을 보면 책 제목이 '쉽게 시작하는 타입스크립트'인 이유를 알 수 있습니다.

## 내용

책은 총 14개의 장으로 구성되어 있습니다. 각 장에서는 다음과 같은 내용을 다룹니다.

> 1. <b>변수와 함수의 타입 정의</b>: 변수와 함수의 파라미터, 반환 타입을 정의하는 방법을 타입 표기 방식을 이용하여 설명합니다.

> 2. <b>인터페이스</b>: 객체의 타입을 정의하는 데 사용하는 인터페이스에 대해 설명합니다.

> 3. <b>연산자를 이용한 타입 정의</b>: 유니언 타입과 인터섹션 타입에 대해 설명합니다.

> 4. <b>타입 별칭</b>: 인터페이스와 유사한 타입 별칭에 대해 설명하고, 두 개념의 차이점을 설명합니다.

> 5. <b>이넘</b>: 특정 값의 집합을 나타내는 이넘에 대해 설명합니다.

> 6. <b>클래스</b>: 클래스 인스턴스, 생성자 메서드, 속성 클래스를 활용하는 방법을 설명합니다.

> 7. <b>제네릭</b>: 타입 코드의 중복을 줄이는 제네릭에 대해 설명하고, extends와 keyof 같은 키워드를 사용하여 타입을 제약하는 방법을 설명합니다.

> 8. <b>타입 추론</b>: 변수를 선언할 때 초깃값을 할당하면 컴파일러가 자동으로 타입을 추론하는 기능과 관련된 내용을 설명합니다.

> 9. <b>타입 단언</b>: 타입 단언이라는 방법을 사용하여 개발자가 직접 타입을 정의하는 방법을 설명합니다. (하지만 타입 단언은 가능한 사용하지 않는 것이 좋습니다)

> 10. <b>타입 가드</b>: 여러 개의 타입 중 하나로 특정할 수 있는 타입 가드에 대해 설명합니다.

> 11. <b>타입 호환</b>: 타입스크립트가 다른 타입 언어와 다르게 타입 구조와 생김새로 타입을 구분한다는 점을 설명합니다.

> 12. <b>타입 모듈</b>: 타입스크립트 모듈이 자바스크립트 모듈을 확장한 개념임을 설명하고, 추가로 사용할 수 있는 type 키워드에 대해 설명합니다.

> 13. <b>유틸리티 타입</b>: 타입스크립트 코드를 효율적으로 작성할 수 있는 유틸리티 타입인 Pick, Omit, Partial, Record 등을 설명합니다.

> 14. <b>맵드 타입</b>: 타입 구조를 변경하고 싶을 때 사용할 수 있는 맵드 타입에 대해 설명하며, 유틸리티 타입 중에서도 맵드 타입을 이용하여 만들어진 타입들에 대해 설명합니다.

## 느낀 점

저는 실무에서 이미 타입스크립트를 사용하고 익숙한 언어이지만, 이 책을 읽으면서 더욱 확실히 느꼈어요. 캡틴 판교님이 교육 분야에서도 열심히 활동하시는 분이라서 그런지, 글이 매우 쉽게 읽혔습니다. 이전에 읽었던 책들은 번역서인데도 글이 매끄럽지 않다는 느낌을 받았는데, 이 책은 그런 점에서 큰 차이를 느낄 수 있었습니다.

또한, 저자가 현업에서 일하시는 분이라 매 문법을 가르치는 항목에 추가로 헷갈리기 쉬운 부분을 명확하게 설명하는 부분이 있었는데, 이 부분은 정말로 도움이 많이 되었습니다. 저는 몰랐거나 헷갈렸던 부분들을 명확하게 알 수 있었어요.

장기효 저자 본인이 단 하나의 책으로 공부해야 할 때 원하는 책을 직접 만들었다고 하셨는데, 정말로 최근 나온 타입스크립트 책 중에서 가장 쉽게 작성되어 있고 필요한 내용도 충실하게 다루고 있다고 느꼈습니다.

칭찬만 하고 있는 것 같아서 광고처럼 보일 수 있지만, 실제로 너무 기분 좋게 읽었던 책이라서 칭찬하게 되었습니다. 이미 타입스크립트를 공부한 경험이 있지만, 명확하게 개념을 정립하고 싶은 개발자들에게 적극적으로 추천하고 싶은 책입니다.

<br/>
