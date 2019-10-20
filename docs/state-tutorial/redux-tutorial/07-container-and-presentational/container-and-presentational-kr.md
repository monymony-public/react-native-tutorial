---
layout: default
title: 7. Container 컴포넌트와 Presentational 컴포넌트
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 7
has_children: false
---

## Container 컴포넌트와 Presentational 컴포넌트

### Presentational and Container Pattern
> 동작(Container)을 다루는 부분과 표현(Presentational)을 다루는 부분을 분리하여 작성하는 컴포넌트 패턴
	
| Presentational 컴포넌트| Container 컴포넌트 |
|--|--|
| DOM 마크업과 스타일 담당 | 동작(behavior) 로직 |
|  데이터 처리 능력 없음 | 데이터 처리능력 있음 |
| 부모 컴포넌트로부터 받은 `props`인 데이터와 콜백(callback)을 사용한다. | `rendering` 되어야 할 데이터를 `props` 로써 데이터 처리 능력이 없는 컴포넌트로 전달한다.|
|Redux와 관련 없음|Redux와 관련 있음|


### 예제
#### container 컴포넌트
- app/containers/CounterContainer.js
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
    
    ##### `connect()()`
    
     - `react-native 컴포넌트`와 `redux` 연결
     - `redux`의 `subscribe` 와 같은 역할을 하지만, `store`를 필요한 곳에서만 사용할 수 있게 해주고 코드를 더 깔끔하게 만들어줍니다.
     - `mapStateToProps`과 `mapDispatchToProps` 인자를 통해서 컴포넌트에 `state`, `callback`을 넘겨줍니다.
             
        1. `mapStateToProps`
         - 전역에서 관리되는 `store` 안의 데이터 `state`를 `props` 객체로 component에게 전달해줍니다.
         - 예를 들어, `state.counter.counterNum`는 `props.counterNum`와 같은 방식으로 전달됩니다.
         - `store`에 `subscribe`하고 그 `state`를 `props`에 매핑합니다.
         - 여기서 state는 상태 객체 전부를 의미합니다. 
            
            만약 counter 값을 얻고자 한다면 `state.counter`를 통해 접근하면 됩니다. 
            ```
            const mapStateToProps = (state) => ({
                counter : state.counter,
            });
            ```
             
        2. `mapDispatchToProps`
        - `store` 의 callback 함수를 인수로 받아서 `props` 객체로 반환되는데,
        - 위의 방식과 같이, `handleIncrement` 라는 함수를 `props.handleIncrement`와 같은 형태로 컴포넌트에 전달됩니다.
        - `action`을 `dispatch` 합니다.
        -  presentational 컴포넌트에 props로 전달되는 handleIncrement라는 함수로 예를 들어보겠습니다. 
                  
              ```
              const mapDispatchToProps = (dispatch) => ({
                    handleIncrement : (index) => dispatch(actions.increment(index)),
                    ...
              });
              ```
        
     - 왜 connect()() 이런 형태일까?
             
          `connect()()` 는 connect() 함수가 또다른 형태의 함수를 반환하는 형태입니다.
          
          ```
          function connect (mapStateToProps, mapDispatchToProps) {
              return function(component){
                  //implementaion
              }
          }
          ```

#### presentational 컴포넌트

> presentational 컴포넌트의 데이터 및 콜백은 props로 전달받아 사용하며,
> redux의 영향을 받지 않고 오직 style만 집중할 수 있는 컴포넌트 입니다.

- components/App.js
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
- app/components/CounterList.js
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
	
- app/components/Counter.js
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