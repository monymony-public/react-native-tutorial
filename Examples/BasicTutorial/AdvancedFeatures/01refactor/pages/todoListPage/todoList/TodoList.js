import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Item from './Item';
import TextField from "./TextField";

const TodoList = props => {
  // todos: { id: number, text: string, checked: boolean }
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(todos);
  })

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
  }

  const onCheckButtonClickHandler = id => e => {
    toggleCheckedTodo(id);
  }

  return (
    <View>
      <TextField onSubmitEnd={addTodoHandler} value={text} onTextChange={onInputChangeHandler} />
      <ScrollView contentContainerStyle={styles.todoListContainer}>
        {todos.map((todo, index) => (
          <Item
            key={index}
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
