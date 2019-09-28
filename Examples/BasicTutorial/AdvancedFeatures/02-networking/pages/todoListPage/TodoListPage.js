import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { TodoList } from "./todoList";

const TodoListPage = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello Todolist</Text>
            <TodoList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 5,
        flexGrow: 1,
        backgroundColor: 'lightblue'
    },
    title: {
        color: 'black',
        fontSize: 36,
        marginTop: 30,
        marginBottom: 30,
        fontWeight: '300',
        textAlign: 'center'
    }
});

export default TodoListPage;