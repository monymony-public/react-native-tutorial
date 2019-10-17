import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Item from './Item';
import TextField from "./TextField";
import runToast from "../../../components/toast"
import shuffle from "../../../util/shuffle";

const TodoList = ({ todos, setTodos }) => {
  const [text, setText] = useState("");

  const onInputChangeHandler = text => {
    setText(text);
  };

  const addTodoHandler = e => {
    addTodo(text);
    setText('');
  };

  const addTodo = text => {
    if (!text) { return; }

    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 10000 + 1), text: text, checked: false },
    ]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCheckedTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const onRemoveButtonClickHandler = id => e => {
    removeTodo(id);
    runToast(`${id}: is deleted!`, "LONG", "CENTER");
  }

  const onCheckButtonClickHandler = id => e => {
    toggleCheckedTodo(id);
  }

  const onShuffleClickHandler = e => {
    setTodos(shuffle(todos));
  }

  return (
    <View>
      <TextField onSubmitEnd={addTodoHandler} value={text} onTextChange={onInputChangeHandler} onShuffleClick={onShuffleClickHandler} />
      <ScrollView contentContainerStyle={styles.todoListContainer}>
        {todos.map(todo => (
          <Item
            key={todos.id}
            todo={todo}
            onRemove={onRemoveButtonClickHandler}
            onCheck={onCheckButtonClickHandler}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    backgroundColor: 'white'
  }
});

export default TodoList;
