import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Item from './Item';
import TextField from "./TextField";
import runToast from "../../../components/toast"
import shuffle from "../../../util/shuffle";

const TodoList = ({ todos, setTodos }) => {
  const [text, setText] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const onRefreshHandler = async () => {
    setIsRefreshing(true);
    // await for 1 sec.
    await setTimeout(() => { }, 1000);
    addTodo("refreshing");
    setIsRefreshing(false);
  }

  const onEndReachedHandler = (info) => {
    addTodo("endReached");
  }

  return (
    <View>
      <TextField onSubmitEnd={addTodoHandler} value={text} onTextChange={onInputChangeHandler} onShuffleClick={onShuffleClickHandler} />
      <FlatList
        contentContainerStyle={styles.todoListContainer}
        data={todos}
        renderItem={({ item, index }) => (<Item
          key={index}
          todo={item}
          onRemove={onRemoveButtonClickHandler}
          onCheck={onCheckButtonClickHandler}
        />)}
        keyExtractor={todo => todo.id}
        initialNumToRender={30}
        inverted={false}
        horizontal={false}

        onRefresh={onRefreshHandler}
        refreshing={isRefreshing}

        onEndReachedThreshold={0.5}
        onEndReached={onEndReachedHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    backgroundColor: 'white'
  }
});

export default TodoList;
