---
layout: default
title: 11. 할 일 목록 추가
parent: 할 일 목록 앱 만들기
grand_parent: Basic(한글)
nav_order: 11
---

## 할 일 목록 추가하기

할 일 목록을 추가하는 기능을 구현해보겠습니다.

`setTodos`를 이용해서 할 일 목록을 추가하는 `addTodo` 함수를 만듭니다.

```js
const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };
```

`addTodo`함수는 사용자가 입력한 텍스트를 인자로 받아 새로운 todo 객체를 생성합니다. `id`는 랜덤으로 생성되도록 하였고, 완료 여부를 나타내는 `checked` 속성은 `false`를 기본값으로 주었습니다. 사용자가 입력한 텍스트는 `textValue` 속성을 들어갑니다. 기존 할 일 목록은 현재 상태를 나타내는 `todos`를 이용해서 그대로 가져옵니다. 따라서 `setTodos` 함수를 통해 이전에 있던 목록은 그대로 유지하면서 새로운 목록을 추가한 배열을 생성합니다.


속성값(`props`)을 이용하면 컴포넌트 간 데이터를 전달 할 수 있습니다. 컴포넌트 속성을 통해 방금 만든 `addTodo` 함수를 TodoInsert 컴포넌트로 전달하겠습니다.

```js
<TodoInsert onAddTodo={addTodo} />
```

속성으로 전달한 함수는 TodoInsert 컴포넌트에서 아래와 같이 받아 올 수 있습니다.

```js
const TodoInsert = ({onAddTodo}) => {
  ...
}
```

TextInput에서 텍스트 값을 받아오기 위해서는 텍스트 값의 상태 관리가 필요합니다. `useState` 훅을 이용하여 사용자가 입력한 텍스트 값의 상태를 관리하겠습니다.

```js
// components/TodoInsert.js
import React, {useState} from 'react';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');
...
}
```

텍스트 값은 문자열(`string`)이므로 초기 상태값은 `''`로 초기화 합니다.
`newTodoItem`는 새로 입력한 텍스트의 상태를 나타내고, `setNewTodoItem`은 `newTodoItem`을 업데이트하는 함수입니다.

실시간으로 사용자가 입력한 텍스트 값의 변화를 관리하기 위한 핸들러 함수(`todoInputHandler`)를 만듭니다.

```js
const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

...
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
...
```

TextInput 컴포넌트의 속성으로 `onChangeText`을 추가하였고 그 안에 `todoInputHandler`를 넣어줍니다. 또한 `value` 속성에는 `newTodoItem`을 넣어줍니다. 이제 입력창에 텍스트를 입력하면 실시간으로 입력한 텍스트 값의 상태가 업데이트 되며 `newTodoItem`에는 텍스트 값의 최신 상태가 담기게 됩니다.

다음으로 아이템을 추가해주는 핸들러를 만들겠습니다.

```js
const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

...

      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler} />
      </View>
...
```

`addTodoHandler` 함수 안에는 `onAddTodo`와`setNewTodoItem`가 있습니다. `onAddTodo` 함수는 사용자가 입력한 텍스트 값을 전달 받아 목록에 추가하고, `setNewTodoItem`함수는 입력창을 공백으로 초기화 시키는 역할을 합니다.

Button 컴포넌트에서 기본적으로 제공하는 `onPress` 이벤트에 `addTodoHandler()` 핸들러를 넣어줍니다. 이제 사용자가 ADD 버튼을 누르면 아이템이 추가됩니다.

### TodoList

추가한 아이템을 리스트에 출력하기 위해 TodoList 컴포넌트와 TodoItem 컴포넌트에 아이템을 전달합니다.

app.js 파일에서 `todos`를 TodoList 컴포넌트에 전달합니다.

```js
<TodoList todos={todos} />
```

`todos`는 할 일 목록의 객체가 담긴 배열입니다. 따라서 TodoList컴포넌트에서 TodoListItem 컴포넌트로 전달 할 때에는 배열에 담긴 객체 하나하나를 넘겨줘야합니다.

```js
const TodoList = ({todos}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem {...todo} />
      ))}
    </ScrollView>
  );
};
```

`map()` 함수를 이용해서 `todos`에 담긴 아이템을 하나씩 TodoListItem 컴포넌트로 전달합니다. 자바스크립트의 디스트럭처링(destructuring) 문법을 이용하면 TodoListItem 컴포넌트에서 아이템 객체에 담긴 값들을 바로 받을 수 있습니다.

각각의 아이템에는 `textValue`, `id`, `checked`라는 **key**와 그에 해당하는 **value**가 담겨 있습니다.

In TodoListItem component, we can get the values from props. Now let's put the textValue on Text area.

아래와 같이 TodoListItem 컴포넌트에서 TodoList 컴포넌트에서 전달한 값들을 받을 수 있습니다.

`<Text>`컴포넌트에 `textValue` 값을 넣어줍니다.

```js
const TodoListItem = ({textValue, id, checked}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
          ...
      </TouchableOpacity>
      <Text style={[styles.text, styles.strikeText]}>{textValue}</Text>
      <TouchableOpacity style={styles.buttonContainer}>
          ...
      </TouchableOpacity>
    </View>
  );
};
```

입력창에 텍스트를 입력하여 ADD 버튼을 눌러 추가하면 리스트에 아이템이 추가됩니다.

![](../images/add_items.png "add_items.png")

그런데 시뮬레이터 하단에 경고창이 뜨는 걸 볼 수 있습니다. 경고 문구는 다음과 같습니다. 

`Each child in a list should have a unique 'key' prop.`
즉, 리스트에 있는 아이템 객체마다 고유한 key값이 필요하다는 말 입니다.

앞서 새로운 아이템 객체를 생성할 때 랜덤으로 id 값을 만들어준 것을 기억하시나요? id 값을 만들어 준 이유가 바로 여기 있습니다. 리스트에 아이템을 출력할 때에는 각 아이템의 고유 번호를 key 값으로 주어야기 때문입니다. (저희는 간단하게 `Math.random()`으로 id를 만들었지만, 이는 중복될 가능성이 있습니다. 따라서 실제 서비스를 만들 때에는 `uuid`와 같은 패키지 등을 이용하여 중복되지 않는 id를 생성해야합니다.)


TodoList 컴포넌트로 돌아가서 TodoListItem에 id 값도 같이 넘겨주겠습니다.

```js
<ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
</ScrollView>
```

경고 문구가 사라진 것을 볼 수 있습니다.

![](../images/unique_key_iitems.png "unique_key_iitems.png")