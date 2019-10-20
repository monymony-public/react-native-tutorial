---
layout: default
title: 7. Container and Presentational
parent: Redux Tutorial
grand_parent: State Management Tutorial
nav_order: 7
has_children: false
---

## Container and Presentational

### Presentational and Container Pattern
> Component pattern that separates the part that deals with motion from the part that deals with expression.
	
| Presentational | Container |
|--|--|
| DOM markup and style | Behavior Logic |
|  No Data Processing Capability | Data processing Capability |
| It uses data and callback that is 'props' that is received from parents. | it transferred data and callback that should be rendered to components that do not have the ability to process data as `props`.|
| Not related to Redux | Related to Redux|


### Example
#### container Component
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
    
     - Connecting `react-native component` to `redux`
     - It acts like `subscribe` of `redux`, makes `store` available only where needed, and makes the code cleaner.
     - Through `mapStateToProps` and `mapDispatchToProps` factors, it passes `state` and `callback` to components.
             
        1. `mapStateToProps`
         - The data `state` inside the `store` managed all over the place is delivered to the component as a `props` object.
         - For example, `state.counter.counterNum` is delivered in the same way as `props.counterNum`.
         - Allow `store` to subscribe and map `state` to `props`
         - state means all state objects.
            
            If you want to get the counter value, you can access it through `state.counter`. 
            ```
            const mapStateToProps = (state) => ({
                counter : state.counter,
            });
            ```
             
        2. `mapDispatchToProps`
        - The callback function of `store` is received as an argument and returned as a `props` object.
        - As shown above, the function `handleIncrement` is passed to the component in the same form as `props.handleIncrement`.
        - Dispatch action
        - Let me give you an example as a function called `handleIncrement` that is passed to the primary component as props.
                  
              ```
              const mapDispatchToProps = (dispatch) => ({
                    handleIncrement : (index) => dispatch(actions.increment(index)),
                    ...
              });
              ```
        
     - Why is it connected()() this way?
             
          `connect()()` returns another function.
          
        ```
        function connect(mapStateToProps, mapDispatchToProps) {
            return funciton(component){
                 //implementaion
            }
        }
        ```

#### presentational component

> The state(data) and callback of the `presentative component` are passed to and used as props,
> It is a component that can focus only on style without being affected by redux..

- app/components/App.js
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