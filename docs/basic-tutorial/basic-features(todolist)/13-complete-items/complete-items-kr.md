---
layout: default
title: 13. 할 일 목록 완료 체크
parent: 할 일 목록 앱 만들기
grand_parent: Basic(한글)
nav_order: 13
---

## 할 일 목록 완료 체크 하기

마지막으로 추가할 기능은 할 일 목록에 완료 체크 표시를 하는 기능 입니다. 각 목록의 왼쪽에 있는 파란색 토글 버튼을 누르면 체크 표시가 되고 한 번 더 누르면 체크가 해제되도록 구현해보겠습니다.

삭제 버튼과 마찬가지로 app.js에서 `onToggle` 함수를 만듭니다.

```js
const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };
```

`onToggle` 함수는 아이템의 `id`를 받아와서 해당하는 아이템의 `checked` 속성값을 반대로 변경해줍니다. (`true`이면 `false`로, `false`이면 `true`로)

`onToggle` 함수를 TodoList 컴포넌트에 전달합니다.

```js
<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
```

TodoList 컴포넌트에서 onToggle 함수를 받아 TodoListItem 컴포넌트로 전달합니다.

```js
const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ScrollView>
  );
};
```

TodoListItem 컴포넌트에서, TouchableOpacity에 `onPressOut` 이벤트 속성을 만들어 `onToggle()` 함수를 할당합니다.

```js
const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={30} color="#3143e8" />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
```

파란색 토글 버튼을 누르면 `checked` 상태가 `true` 또는 `false`로 변경됩니다. `checked` 속성이 `true`이면 체크 표시된 토글 버튼을 보여주고, `checked` 속성이 `false`이면 체크 표시가 해제된 토글 버튼을 보여줍니다.

마찬가지로 텍스트에도 각 상태별 스타일을 적용합니다. `checked` 속성이 `true`이면 strke 체크(---)가 된 텍스트 보여주고, `checked` 속성이 `false`이면 체크 표시가 해제된 텍스트를 보여줍니다.

```js
<Text
  style={[
    styles.text,
    checked ? styles.strikeText : styles.unstrikeText,
  ]}>
  {textValue}
</Text>
```

![](../images/toggle.png "toggle.png")
