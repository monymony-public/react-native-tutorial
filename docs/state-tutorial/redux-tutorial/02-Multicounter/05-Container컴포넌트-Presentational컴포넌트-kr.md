## 05. Container 컴포넌트와 Presentational 컴포넌트
Container 컴포넌트

> redux 상태 구독, redux 액션을 보내기 등 데이터, 상태와 관련된 것을 나타내는 컴포넌트로
> redux와 연관되어 있습니다.

Presentational 컴포넌트

 > 어떻게 보여질 지(마크업, 스타일) 집중하는 컴포넌트로 props에 의해서만 데이터를 읽거나, 콜백을 호출한다.

[더 자세한 설명은 이곳을 참고해주세요.](https://deminoth.github.io/redux/basics/UsageWithReact.html)

### 예제
### container 컴포넌트
- containers/CounterContainer.js
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
    
    const CounterContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(App);
    
    export default CounterContainer;
    
    ```
    ##### 1. `mapStateToProps` 함수
    > store 안의 state 값을 props 로 연결해주는 함수
    
    여기서 state는 상태 객체 전부를 의미합니다. counter 값을 얻고자 할 때 `state.counter`를 통해 접근하면 됩니다. 
    ```
    const mapStateToProps = (state) => ({
        counter : state.counter,
    });
    ```
    
    ##### 2. `mapDispatchToProps` 함수
    > 해당 액션을 dispatch 하는 함수를 만든 후, 이를 props 로 연결해주는 함수.
    
     presentational 컴포넌트에 props로 전달되는 handleIncrement라는 함수로 예를 들어보겠습니다. 
        
    ```
    const mapDispatchToProps = (dispatch) => ({
          handleIncrement : (index) => dispatch(actions.increment(index)),
          ...
    });
    ```
    > 인자값으로 index를 받으며 increment를 나타내는 action을 dispatch() 안에 넣어 store에게 action 값에 따른 상태 변화를 요청합니다.
    ##### 3. `connect` 함수
    
    > React 컴포넌트를 Redux 스토어에 연결 `connect`시켜주는 함수
    
    > 데이터(state)를 props로 연결시켜주는 `mapStateToProps`와 콜백함수를 props로 연결시켜주는 `mapDispatchToProps`를 `presentational 컴포넌트`(App)와 연결시켜주는 함수
    
    ```
    const CounterContainer = connect(
        mapStateToProps,
            mapDispatchToProps
    )(App);
    ```
    
    [connect 객체에 대한 자세한 설명](https://react-redux.js.org/api/connect)

    

#### presentational 컴포넌트

> presentational 컴포넌트의 데이터 및 콜백은 props로 전달받아 사용하고
> redux의 영향을 받지 않으며 오직 style만 집중할 수 있는 컴포넌트 입니다.

- components/App.js
    #####
	```
    import React from 'react';
    import CounterList from './CounterList';
    import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
    import PropTypes from 'prop-types';
    
    const App = ({counter, handleAddCounter, handleRemoveCounter, handleIncrement, handleDecrement}) => {
        return (
            <View>
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
            </View>
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
	
	
- components/Counter.js

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
	
	
- components/CounterList.js

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