---
layout: default
title: 4. Container 컴포넌트와 Presentational 컴포넌트
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 4
has_children: false
---

# Container 컴포넌트와 Presentational 컴포넌트  
  

## 전체적인 구조

아래처럼 컴포넌트를 구성해볼 것입니다.
![container_presentational_01](../images/container_presentational_01.png)  
  

## 예제 및 설명
현재 위치가 `Examples/StateManagement/ReduxTutorial` 인지 확인한 후, 다음과 같이 폴더와 파일을 만듭니다.
```
$ mkdir app
$ cd app
$ mkdir components containers
$ touch components/App.js components/Counter.js components/CounterList.js containers/CounterListContainer.js
```
만들면 아래처럼 구성될 것입니다.
```
/components  
   App.js   
   Counter.js  
   CounterList.js
/containers  
   CounterListContainer.js
```

`/components` 와 `/containers` 로 component를 분리하는 방식인 Presentational and Container 패턴에 따라서 구현해보겠습니다.

## Presentational and Container Pattern 이란? 
 
데이터를 다루는 부분(Container)과 화면을 표현하는 부분(Presentational)으로 나눠서 개발하는 패턴 
 
  | Presentational 컴포넌트| Container 컴포넌트 |  
|--|--|  
| DOM 마크업과 스타일 담당 | 동작(behavior) 로직 |  
|  데이터 처리 능력 없음 | 데이터 처리능력 있음 |  
|Redux와 관련 없음|Redux와 관련 있음|  
| 부모 컴포넌트로부터 받은 `props`인 데이터와 콜백(callback)을 사용한다. | 렌더링 되어야 할 데이터를 `props` 로써 데이터 처리 능력이 없는 컴포넌트인 Presentational 컴포넌트로 전달한다.|

유지보수와 재사용성을 고려하여 이렇게 개발하는게 편리하지만 꼭 그래야하는 것은 아닙니다. 
Presentational 컴포넌트에 props가 아닌 state가 있을 수 있고 Container 컴포넌트에 DOM 마크업이나 style이 있을 수 있습니다. 
기술적인 부분에 의해서 나눈 것이 아니라 목적성에 의해서 만들어진 패턴입니다.  
[Presentational and Container Pattern 더 자세히 보기](https://blog.naver.com/PostView.nhn?blogId=backsajang420&logNo=221368885149&categoryNo=77&parentCategoryNo=0)
  
  
### 1. Presentational Component

> presentational 컴포넌트의 데이터 및 콜백은 props로 전달받아 사용하며,  
> redux의 영향을 받지 않고 오직 style만 집중할 수 있는 컴포넌트 입니다.

다음과 같은 계층적 구조로 설계해봅시다.

![lets_make_02](../images/lets_make_02.png)

app/components/App.js  
```
import React from 'react';
import CounterList from './CounterList';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

const App = ({counter, handleAddCounter, handleRemoveCounter, handleIncrement, handleDecrement}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.counterAddRemoveContainer}>
                <TouchableOpacity
                    style={styles.counterAddRemoveButton}
                    onPress={handleAddCounter}>
                    <Text
                        style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
                        Add Counter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.counterAddRemoveButton}
                    onPress={handleRemoveCounter}>
                    <Text
                        style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
                        Remove Counter
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <CounterList
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
            </View>
        </ScrollView>
    );
};

App.propTypes = {
    counter: PropTypes.arrayOf(PropTypes.shape({
        counterNum : PropTypes.number,
    })),
    handleIncrement : PropTypes.func,
    handleDecrement : PropTypes.func,
    handleAddCounter : PropTypes.func,
    handleRemoveCounter : PropTypes.func,
};

App.defaultProps = {
    counter : [],
    handleIncrement : () => console.warn('handleIncrement not defined'),
    handleDecrement : () => console.warn('handleDecrement not defined'),
    handleAddCounter : () => console.warn('handleAddCounter not defiend'),
    handleRemoveCounter : () => console.warn('handleRemoveCounter not defiend'),
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#F6F6F6',
      paddingTop: '15%',
      paddingBottom : '15%',
    },
    counterAddRemoveContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    counterAddRemoveButton: {
        margin: 10,
        padding: 10,
        flex: 1,
        backgroundColor: '#8041D9',
    },
});

export default App;
```

app/components/CounterList.js  
```
import React from 'react';
import Counter from './Counter';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const CounterList = ({counter, handleAddCounter, handleRemoveCounter, handleIncrement, handleDecrement}) => {
    const counterModule = counter.map((item, index) => (
            <Counter
                key={index}
                index={index}
                value={item}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
      ));

    return (
        <View style={styles.counterFrame}>
            {counterModule}
        </View>
    );
};

CounterList.propTypes = {
    counter: PropTypes.array,
    handleIncrement : PropTypes.func,
    handleDecrement : PropTypes.func,
    handleAddCounter : PropTypes.func,
    handleRemoveCounter : PropTypes.func,
};

CounterList.defaultProps = {
    counter : [],
    handleIncrement : () => console.warn('handleIncrement not defined'),
    handleDecrement : () => console.warn('handleDecrement not defined'),
    handleAddCounter : () => console.warn('handleAddCounter not defiend'),
    handleRemoveCounter : () => console.warn('handleRemoveCounter not defiend'),
};

const styles = StyleSheet.create({
    counterFrame: {
        padding: 10,
    },
});

export default CounterList;
```

app/components/Counter.js 
```
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({index, value, handleIncrement, handleDecrement}) => {
    return (
      <View style={styles.counterContainer}>
        <Text style={styles.counterInfo}>
          Count: {value.counterNum}
        </Text>
        <View style={styles.counterBtnContainer}>
          <TouchableOpacity
              style={styles.counterButton}
              onPress={() => handleIncrement(index)}>
            <Text style={{color: '#4C4C4C'}}>INCREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.counterButton}
              onPress={() => handleDecrement(index)}>
            <Text style={{color: '#4C4C4C'}}>DECREMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

Counter.propTypes = {
  index : PropTypes.number,
  value : PropTypes.object,
  handleIncrement : PropTypes.func,
  handleDecrement : PropTypes.func,
};

Counter.defaultProps = {
  index : 0,
  value : { counterNum : 0 },
  handleIncrement : () => console.warn('handleIncrement not defined'),
  handleDecrement : () => console.warn('handleDecrement not defined'),
};



const styles = StyleSheet.create({
  counterContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom: 10,
  },
  counterInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  counterBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  counterButton: {
    backgroundColor: '#D1B2FF',
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
``` 

### 2. Container Component
> Redux의 Action 호출 하는 작업 등을 이 곳에서 작성하며, 데이터와 Callback을 컴포넌트에 props로 넘겨줍니다.

app/containers/CounterListContainer.js
```
import * as actions from '../actions';  
import { connect } from 'react-redux';  
import App from '../components/App';  
  
const mapStateToProps = (state) => ({  
    counter : state.counter,  
});  
  
const mapDispatchToProps = (dispatch) => ({  
  handleIncrement : (index) => dispatch(actions.increment(index)),  
  handleDecrement : (index) => dispatch(actions.decrement(index)),  
  handleAddCounter : () => dispatch(actions.add()),  
  handleRemoveCounter : () => dispatch(actions.remove()),  
});  
  
  
const CounterListContainer = connect(  
    mapStateToProps,  
  mapDispatchToProps  
)(App);  
  
export default CounterListContainer;
```

### connect()()
- react-native 컴포넌트와 redux 연결  
- `mapStateToProps`과 `mapDispatchToProps` 인자를 통해서 컴포넌트에 `state`, `callback`을 넘겨줍니다.  
- redux 패키지의 `subscribe()` 처럼 데이터 변화가 있을 때 마다 리렌더링되도록 하지만, `store`를 필요한 곳에서만 사용할 수 있게 해주고 코드를 더 깔끔하게 만들어줍니다.  

- 보통 아래처럼 사용되며, 전달해줄 state값이나 callback이 없다면 mapStateToProps 혹은 mapDispatchToProps에 null을 할당할 수 있습니다.

    ```
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )([연결해줄 presentational 컴포넌트])
    ```


1. mapStateToProps

	전역에서 관리되는 `store` 안의 데이터 `state` 를 `props` 객체로 component에게 전달해줍니다. 
	여기서는 counter를 넘겨주는데, 전체 state 값을 가진 `state` 에서 counter를 가져오기 위해 `state.counter` 을 담아줍니다. 
	```
	const mapStateToProps = (state) => ({  
	    counter : state.counter,  
	});
	```
	컴포넌트에서 사용될 때, `state.counter`는 `props.counter` 과 같은 방식으로 전달되어 사용될 것입니다.  
	이제 presentational 컴포넌트에 넘겨줄 state 값을 mapStateToProps에 담았습니다.
	다음은 `mapDispatchToProps` 에 callback을 담아주겠습니다.
	
2. mapDispatchToProps

	callback 함수와 그에 따른 action을 dispatch 하는 것을 연결하여 `mapDispatchToProps`에 담습니다.
	```
	const mapDispatchToProps = (dispatch) => ({  
		  handleIncrement : (index) => dispatch(actions.increment(index)),  
		  handleDecrement : (index) => dispatch(actions.decrement(index)),  
		  handleAddCounter : () => dispatch(actions.add()),  
		  handleRemoveCounter : () => dispatch(actions.remove()),  
	});
	```

	`dispatch()` 란?
	> 전역적으로 데이터를 관리하고 있는 store 에게 action 값을 넘겨주며 어떻게 state를 변화시켜야 할지 알려주는 메서드입니다.  
	> 즉, action 값을 인자로 받으며 state 값을 수정할 때 사용되는 메서드입니다.
	
3. connect

    connect()() 를 사용하여 state, callback을 presentational 컴포넌트로 연결해주고 CounterListContainer로써 모듈을 export 합니다.
	```
	const CounterListContainer = connect(  
	    mapStateToProps,  
	    mapDispatchToProps  
	)(App);

	export default CounterListContainer;
	```

	`connect()()` 의 ( )( ) ?
	> `connect()()` 가 presentational component를 인자로 받는 또다른 함수를 리턴하는 형태이다.

	```
	function connect (mapStateToProps, mapDispatchToProps) {  
		return function(component){ 
			//implementaion 
		}
	}
	```