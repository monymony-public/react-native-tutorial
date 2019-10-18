---
layout: default
title: 12. Delete items
parent: Make TodoList Apps
grand_parent: Basic
nav_order: 12
---

## Delete items

We will create a function to delete items.

In app.js, add `onRemove` function to remove items.

```js
const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
```

This function also use `setTodos` to update state. It will get an id of the item and create a new array with items except for the item matching with the id. The filtered array will be updated by `setTodos` as a new todo list.

Pass the `onRemove` function to TodoList component through `props`.

```js
<TodoList todos={todos} onRemove={onRemove} />
```

In TodoList.js, receive the `onRemove` function through props and pass it to `TodoListItem` through props.

```js
const TodoList = ({todos, onRemove}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} onRemove={onRemove} />
      ))}
    </ScrollView>
  );
};
```

In TodoListItem.js, apply `onPress` event on delete button and calling `onRemove()` function.

```js
const TodoListItem = ({textValue, id, checked, onRemove}) => {
  return (
    <View style={styles.container}>
        ...
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={onRemove(id)}>
          <Icon name="delete" size={30} color="#e33057" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
```
Now you can remove items on the list by pressing delete button.

![](../images/delete.png "delete.png")