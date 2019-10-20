---
layout: default
title: 3. Hands on MobX
parent: MobX Tutorial
grand_parent: State Management Tutorial
nav_order: 3
---

## 3. Hands on MobX

In this chapter, we will apply MobX to the multi-count example.

- The configuration setting is [here](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/01-getting-started/getting-started-kr.html)

- SetStaet Multicounter example codes that do not apply to MobX are [here](https://github.com/JeffGuKang/react-native-tutorial/tree/master/Examples/StateManagement/MobXTutorial)

- Multicounter example code with MobX is [here](https://github.com/JeffGuKang/react-native-tutorial/tree/master/Examples/StateManagement/MobXDecoratorTutorial)

It can be found in above.

### 1) Folder structure

The folder structure of the existing setState example is as follows.

```
ㄴ /app
  ㄴ /components
      Counter.js // Counter Component
  ㄴ /containers
      CounterContainer.js // Counter Contianer
  App.js
  index.js
```

To apply the MobX, you must add the store folder and CounterStore.js file as follows.

```
ㄴ /app
  ㄴ /components
      Counter.js // Counter Component
  ㄴ /containers
      CounterContainer.js // Counter Contianer
  ㄴ /store
      counterStore.js // MobX Store
  App.js
  index.js
```


### 2) Multicounter with setState

The multi-count example created by React using setState without using state-management library consists of the following:


- containers/CounterContainer.js

```jsx
import React from 'react';
import Counter from '../components/Counter';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: [
        {
          counterNum: 0,
        },
      ],
    };
  }

  // Add counter
  handleAddCounter = () => {
    const {counter} = this.state;
    this.setState({
      counter: counter.concat({counterNum: 0}),
    });
  };

  // Remove counter
  handleRemoveCounter = () => {
    const {counter} = this.state;
    this.setState({
      counter: counter.slice(0, this.state.counter.length - 1),
    });
  };

  // Increment counterNum
  handleIncrement = ({index}) => {
    const {counter} = this.state;
    this.setState({
      counter: [
        ...counter.slice(0, index),
        {
          counterNum: counter[index].counterNum + 1,
        },
        ...counter.slice(index + 1, counter.length),
      ],
    });
  };

  // Decrement counterNum
  handleDecrement = ({index}) => {
    const {counter} = this.state;
    this.setState({
      counter: [
        ...counter.slice(0, index),
        {
          counterNum: counter[index].counterNum - 1,
        },
        ...counter.slice(index + 1, counter.length),
      ],
    });
  };

  render() {
    const {counter} = this.state;
    return (
      <View>
        <View style={styles.counterAddRemoveContainer}>
          <TouchableOpacity
            style={styles.counterAddRemoveButton}
            onPress={this.handleAddCounter}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
              Add Counter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterAddRemoveButton}
            onPress={this.handleRemoveCounter}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
              Remove Counter
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.counterFrame}>
          {counter.map((item, index) => (
            <Counter
              key={index}
              index={index}
              value={item}
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterFrame: {
    padding: 10,
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

export default CounterContainer;
```
`CounterContainer.js` shows that this.state is used to define state objects. You can also use this.setState() to change the state value.

The method of passing state values to a subcomponent is possible by specifying the properties of the component tags as shown below. In addition, if you want to change the value of a parent component in a child component, you usually use the handleIncrement property and handleDecrement property to communicate the function itself that manipulates the value of the parent component.

```jsx
<Counter
    key={index}
    index={index}
    value={item}
    handleIncrement={this.handleIncrement}
    handleDecrement={this.handleDecrement}
/>
```

In a subcomponent, these values are available using this.props, and changes in values are only allowed in the parent component.


- components/Counter.js

```jsx
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Counter extends React.Component {
  handleIncrement = index => {
    this.props.handleIncrement(index);
  };

  handleDecrement = index => {
    this.props.handleDecrement(index);
  };

  render() {
    const {index, value} = this.props;
    return (
      <View index={value.toString()} style={styles.counterContainer}>
        <Text style={styles.counterInfo}>
          Count: {value.counterNum.toString()}
        </Text>
        <View style={styles.counterBtnContainer}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => this.handleIncrement({index})}>
            <Text style={{color: '#4C4C4C'}}>INCREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => this.handleDecrement({index})}>
            <Text style={{color: '#4C4C4C'}}>DECREMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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

As such, React, React Native has one-way flow from Parent to Child. These characteristics can cause difficulties in global state-management, such as the exchange of data between non-parent components.

이러한 문제점을 보완하기 위해 MobX, Redux 같은 상태관리 라이브러리가 사용할 수 있습니다. 이러한 라이브러리들은 상태 로직을 컴포넌트상에서 분리할 수 있어 유지보수하기 수월한 코드를 작성하는데 도움이 됩니다.

To compensate for these problems, state-management libraries such as MobX and Redux can be used. These libraries can isolate state logic from components, which helps you write code that is easy to maintain.

From now on, we will refactorize the setState configured state management code using MobX.

### 3) Applying MobX without using decorator

The concepts of MobX are well described in [Chapter 2](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/02-what-is-mobx/what-is-mobx.html).

There are two ways to define a MobX without using a decoder, and one such using decorator - `@`.


Let's first try refactoring the existing setState code by not using the decoder.

First, use MobX to create a store file to store the states as shown below.

- store/counterStore.js

```jsx
import {decorate, observable, action} from 'mobx';

class CounterStore {
  counter = [{counterNum: 0}];

  // Add counter
  handleAddCounter = () => {
    this.counter.push({counterNum: 0});
  };

  // Remove counter
  handleRemoveCounter = () => {
    this.counter.pop();
  };

  // Increment counterNum
  handleIncrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum + 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };

  // Decrement counterNum
  handleDecrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum - 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };
}

decorate(CounterStore, {
  counter: observable,
  handleAddCounter: action,
  handleRemoveCounter: action,
  handleIncrement: action,
  handleDecrement: action,
});

export default new CounterStore();
```

In the existing setState example, counters and functions managed from CounterContender.js to CounterStore.js are moved from the CounterContainer.js to the counterStore.js, and functions are modified to a natural form, rather than to manage the state with setState. I created a new class called CounterStore.

MobX is applied outside of the CounterStore class using a decade function. The first parameter is to include the applied component, and the second parameter is an object method, the key is to write down the variable name or function name to which the MobX is applied, and the concept of the MobX to be used in Value.

In Redux, all `reducers`, `action`, and `store` must be implemented separately. On the other hand, it can be implemented as a simple method of generating only `observable` values and `action` functions that will change their operation by creating one class in MobX

`observable` is the state that is being observed and MobX can detect changes in state.

`action` is the part that defines how a change in the state will occur.

Other MobileX concepts can be found in [Chapter 2](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/02-what-is-mobx/what-is-mobx-kr.html)

The existing codes `CounterContender.js` and `Counter.js` should be changed as follows.

- containers/CounterContainer.js

```jsx
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import Counter from '../components/Counter';
import CounterStore from '../store/counterStore';

const CounterContainer = observer(
  class CounterContainer extends React.Component {
    render() {
      return (
        <View>
          <View style={styles.counterAddRemoveContainer}>
            <TouchableOpacity
              style={styles.counterAddRemoveButton}
              onPress={CounterStore.handleAddCounter}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '700',
                }}>
                Add Counter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.counterAddRemoveButton}
              onPress={CounterStore.handleRemoveCounter}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '700',
                }}>
                Remove Counter
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.counterFrame}>
            {CounterStore.counter.map((item, index) => (
              <Counter key={index} index={index} value={item} />
            ))}
          </View>
        </View>
      );
    }
  },
);

...

export default CounterContainer;
```

What's different from the existing code is that the CounterContender class is wrapped in a `observer` function.

`observer` automatically invokes the component API forceUpdate() so that the value is reflected on the screen when the state value declared observable changes.

The `observer` function is included in the mobx-react module rather than included in the mobx module, so you must import it first.

In addition, the state and functions defined in the MobX store above have been transferred to the counterStore.js, so that they can be imported for use and modified accordingly.

- components/Counter.js

```jsx
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import CounterStore from '../store/counterStore';

const Counter = observer(
  class Counter extends React.Component {
    render() {
      const {index, value} = this.props;
      return (
        <View index={value.toString()} style={styles.counterContainer}>
          <Text style={styles.counterInfo}>
            Count: {CounterStore.counter[index].counterNum}
          </Text>
          <View style={styles.counterBtnContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => CounterStore.handleIncrement({index})}>
              <Text style={{color: '#4C4C4C'}}>INCREMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => CounterStore.handleDecrement({index})}>
              <Text style={{color: '#4C4C4C'}}>DECREMENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  },
);

...

export default Counter;
```

Couter.js also import mobile-react module for use of `observer` as shown above and cover counter class with `observer` function. In addition, counterStore.js are imported for function use to modify the counterStore.js to work properly.

Through this refactoring process, you can achieve the same multi-count example using MobileX as you would with your existing setState example.

### 4) Try applying MobX by using a decorator

We learned above how to use the MobX without using the Decorator (`@`) and it is common to define a MobX using an easy and intuitive `@`decoder. In order to use it, you must set up the following label settings separately.

```bash
npm install --save-dev @babel/plugin-proposal-decorators
```

After installing the module, at the root of the folder.Create a 'babelrc' file and add the contents below.

```json
{
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}]
    ]
}
```

From now on, you can use the MobX using the `@` decoder. Let's see how the code can be concise.

- store/counterStore.js

```jsx
import {observable} from 'mobx';
class CounterStore {
  @observable counter = [{counterNum: 0}];

  // Add counter
  handleAddCounter = () => {
    this.counter.push({counterNum: 0});
  };

  // Remove counter
  handleRemoveCounter = () => {
    this.counter.pop();
  };

  // Increment counterNum
  handleIncrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum + 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };

  // Decrement counterNum
  handleDecrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum - 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };
}

export default new CounterStore();
```

When the decoder was not used, the decorate function had to be declared outside the class, but if there is a MobX concept that you want to apply now, you can write the `@` and concept next to the line that you need to apply.

- containers/CounterContainer.js

```jsx
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import Counter from '../components/Counter';
import CounterStore from '../store/counterStore';
@observer
class CounterContainer extends React.Component {

  render() {
    return (
      <View>
        <View style={styles.counterAddRemoveContainer}>
          <TouchableOpacity
            style={styles.counterAddRemoveButton}
            onPress={CounterStore.handleAddCounter}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
              Add Counter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterAddRemoveButton}
            onPress={CounterStore.handleRemoveCounter}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
              Remove Counter
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.counterFrame}>
          {CounterStore.counter.map((item, index) => (
            <Counter key={index} index={index} value={item} />
          ))}
        </View>
      </View>
    );
  }
}

...

export default CounterContainer;
```
- components/Counter.js

```jsx
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import CounterStore from '../store/counterStore';

@observer
class Counter extends React.Component {
  render() {
    const {index, value} = this.props;
    return (
      <View index={value.toString()} style={styles.counterContainer}>
        <Text style={styles.counterInfo}>
          Count: {CounterStore.counter[index].counterNum}
        </Text>
        <View style={styles.counterBtnContainer}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => CounterStore.handleIncrement({index})}>
            <Text style={{color: '#4C4C4C'}}>INCREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => CounterStore.handleDecrement({index})}>
            <Text style={{color: '#4C4C4C'}}>DECREMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

...

export default Counter;
```

It's the same with applying the observer concept. Previously, it was implemented as an observer function, but if you write `@observer` on top of the class, it will be applied.


## Reference
1. [Mobx-react 기본 개념 및 사용법 1 (살짝 어려움 주의)](https://helloinyong.tistory.com/175)