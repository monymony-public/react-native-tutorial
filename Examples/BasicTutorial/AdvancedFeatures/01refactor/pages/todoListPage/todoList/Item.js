import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Item = ({ todo, onRemove, onCheck }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onCheck(todo.id)}>
                {todo.checked ? 
                    <Icon style={styles.circle} name="chevron-with-circle-down" size={30} color="#3143e8" /> 
                    : <Icon style={styles.circle} name="circle" size={30} color="#3143e8" />
                }
            </TouchableOpacity>

            <Text
                style={[ styles.text, todo.checked && styles.checkedText ]}>
                {todo.text}
            </Text>

            <TouchableOpacity style={styles.trash} onPress={onRemove(todo.id)}>
                <Icon name="trash" size={30} color="#e33057" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkedText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    text: {
        color: '#29323c',        
        flexGrow: 1,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20
    },
    circle: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    trash: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default Item;
