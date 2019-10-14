---
layout: default
title: 13. Complete items
parent: Make TodoList Apps
grand_parent: React Native Basic Features
nav_order: 13
---

## Check item completed

The last features that we are going to apply is to change the status of items. You can check items on the list whether it is completed or not. If you click the toggle button next to the item's contents, it will be checked as a sign that the task is completed.

Like onRemove, we will create `onToggle` function in app.js.

```js
const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };
```

`onToggle` function will find a matching item by id and set it checked true or false. It will change the checked property as opposed to previous value.

Pass the onToggle function to TodoList.

```js
<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
```

In TodoList.js, get the onToggle function through props and pass it to TodoListItem through props.

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

In TodoListItem.js, set `onPressOut` event on TouchableOpacity and calling `onToggle()` function.

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

When you click the toggle button, the checked state will be changed(true/false). If checked is true, we apply the Icon which is the checked circle. If checked is false, we show the unchecked circle.

We will apply the style on the text content of items. If checked is true, the text will be strike text and if checked is false the strike marked will disappear.

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