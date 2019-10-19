---
layout: default
title: 10. 상태(state) 추가하기
parent: 할 일 목록 앱 만들기
grand_parent: Basic(한글)
nav_order: 10
---

## 상태(State) 추가하기

할 일 목록 추가, 삭제 기능 등을 구현하기 위해서는 상태값을 정의해야 합니다. `todos` 라는 속성으로 상태를 정의해서 할 일 목록의 상태를 관리하겠습니다. `todos` 객체는 아래와 같이 세 가지 속성값을 가집니다.

```
todos: {id: Number, textValue: string, checked: boolean }
```

- `id`: 각 목록의 고유 아이디
- `textValue`: 목록 내용
- `checked`: 완료 여부. (`true`이면 완료 `false`이면 미완료)

본 튜토리얼에서는 상태 관리를 위해서 훅(hook)을 사용하겠습니다.

훅(hook)은 리액트 버전 16.8에 추가된 기능으로 훅을 이용하면 함수형 컴포넌트에서도 컴포넌트의 상탯값을 관리할 수 있고 컴포넌트의 생명 주기 함수를 이용할 수 있습니다. 훅과 관련된 내용은 [링크](https://reactjs.org/docs/hooks-intro.html)를 참조하시기 바랍니다.

훅을 사용하기 위해 `useState`를 임포트 하겠습니다.

```js
import React, {useState} from 'react';

const [todos, setTodos] = useState([]);
```

`useState` 훅은 인자로 초기 상태값을 받습니다. number, string, array 등이 인자값으로 들어갈 수 있습니다. 우리는 할 일 목록 객체를 담을 배열이 필요하기 때문에 빈 배열(`[]`)을 인자값으로 넣어주었습니다.

`useState` 훅은 배열에 두 개의 값을 넣어 반환합니다. 첫 번째 요소는 상태값으로, 함수 호출 시 입력한 인수가 초기값으로 사용됩니다. 두 번째 요소는 상태값을 변경할 수 있는 함수입니다. 본 튜토리얼에서 `todos`는 할 일 목록의 현재 상태를 나타내며 `setTodos`는 `todos`를 업데이트 해주는 함수입니다.
