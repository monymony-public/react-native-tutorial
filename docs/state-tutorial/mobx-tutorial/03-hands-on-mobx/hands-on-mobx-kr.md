---
layout: default
title: 3. MobX 사용해보기
parent: MobX 튜토리얼
grand_parent: State Management Tutorial(한글)
nav_order: 3
---

## 3. MobX 사용해보기

이번 장에서는 MobX를 멀티카운터 예제에 적용해보도록 하겠습니다.

- 환경설정은 [여기](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/01-getting-started/getting-started-kr.html)

- MobX가 적용되지 않은 멀티카운터 예제코드는 [여기](https://github.com/JeffGuKang/react-native-tutorial/tree/master/Examples/StateManagement/MobXTutorial)

- MobX가 적용된 멀티카운터 예제코드는 [여기](https://github.com/JeffGuKang/react-native-tutorial/tree/master/Examples/StateManagement/MobXDecoratorTutorial)

에서 확인할 수 있습니다.

### 1) 폴더구조

기존 setState 예제의 폴더구조는 다음과 같습니다.

```
ㄴ /app
  ㄴ /components
      Counter.js // Counter Component
  ㄴ /containers
      CounterContainer.js // Counter Contianer
  App.js
  index.js
```

MobX를 적용하기위해서는 아래와 같이 store폴더와 하위항목인 counterStore.js를 추가해야 합니다.

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


### 2) setState를 사용한 멀티카운터

React에서 상태관리 라이브러리를 사용하지 않고 setState를 사용해 작성한 멀티카운터 예제는 아래와 같이 구성되어 있습니다. 

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
`CounterContainer.js`를 보면 this.state를 사용해 상태인 state 객체를 정의할 수 있다는 것을 알 수 있습니다. 또한 this.setState()를 사용하여 state 값을 변화시키는 것을 확인할 수 있습니다.

하위 컴포넌트에 state 값을 전달하는 방법은 아래와 같이 컴포넌트 태그의 속성으로 지정해주는 방식으로 가능합니다. 또한 하위 컴포넌트에서 상위 컴포넌트의 값을 변경하고 싶으면 handleIncrement 속성, handleDecrement 속성 같이 상위 컴포넌트 값을 조작하는 함수 자체를 전달하는 방법을 주로 이용합니다.

```jsx
<Counter
    key={index}
    index={index}
    value={item}
    handleIncrement={this.handleIncrement}
    handleDecrement={this.handleDecrement}
/>
```

하위 컴포넌트에서는 이렇게 받은 값을 this.props를 이용해 사용할 수 있으며 값의 변경은 상위 컴포넌트에서만 허용됩니다. 


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

이와같이 React, React Native는 Parent에서 Child로 단방향 흐름을 가지고 있습니다. 이러한 특성 때문에 부모-자식 관계가 아닌 컴퓨넌트끼리 데이터를 교류하는 것과 같은 글로벌 상태관리에 어려움이 있을 수 있습니다.

이러한 문제점을 보완하기 위해 MobX, Redux 같은 상태관리 라이브러리가 사용할 수 있습니다. 이러한 라이브러리들은 상태 로직을 컴포넌트상에서 분리할 수 있어 유지보수하기 수월한 코드를 작성하는데 도움이 됩니다.

지금부터 setState로 구성된 상태관리 코드를 MobX를 사용하는 코드로 리팩토링 해보도록 하겠습니다.

### 3) decorator를 쓰지 않고 MobX 적용해보기

MobX의 개념에 대해서는 [2장](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/02-what-is-mobx/what-is-mobx-kr.html)에 잘 설명되어 있습니다.

MobX는 데코레이터를 사용하지 않고 정의하는 방법과 `@`와 같은 데코레이터를 사용하여 정의하는 방법이 있습니다.

먼저 데코레이터를 사용하지 않는 방법으로 기존 setState 코드를 리팩토링 해보도록 하겠습니다.

먼저 MobX를 이용해 state 들을 저장할 store 파일을 아래와 같이 작성합니다.

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

기존 setState 예제에서의 CounterContainer.js에서 state로 관리되는 counter와 함수를 counterStore.js로 옮기고 함수의 경우 setState로 상태를 관리하는 형태가 아니라 자연스러운 형태로 수정했습니다. CounterStore라는 클래스를 새로 만들었습니다.

MobX는 CounterStore 클래스 외부에 decorate 함수를 이용하여 적용하게 됩니다. 첫번째 파라미터는 적용한 컴포넌트를 넣어주고 두번째 파라미터는 Object 방식으로 Key에는 MobX를 적용할 변수명 혹은 함수명을 적고 Value에는 사용할 MobX 개념을 적습니다.

Redux에서는 `리듀서`, `액션`, `스토어`를 모두 분리하여 구현해야 합니다. 반면 MobX에서는 하나의 클래스를 생성하여 `observable` 값과 그 연산을 변경시킬 `action` 함수만 생성하는 간단한 방법으로 구현 가능합니다.

`observable`은 관찰받고 있는 state이고 MobX는 state의 변화를 알아챌 수 있습니다.

`action`은 상태에 변화를 어떻게 일으킬 것인지 정의하는 부분 입니다.

이외의 MobX 개념은 [2장](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/02-what-is-mobx/what-is-mobx-kr.html)에서 확인하실 수 있습니다.

기존코드인 `CounterContainer.js`와 `Counter.js`는 아래와 같이 변경해야 합니다.

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

기존 코드와 다른점은 CounterContainer 클래스가 `observer` 함수로 싸여있다는 것입니다.

`observer`는 컴포넌트 API인 forceUpdate()를 자동으로 호출하여 observable로 선언한 state값이 변할 때 값이 화면에 반영되도록 해줍니다.

`observer` 함수는 mobx 모듈에 포함된게 아닌 mobx-react 모듈에 포함되어 있으므로 먼저 이를 import 해야 합니다.

또한 위에서 MobX store를 정의해놓은 state와 함수들은 counterStore.js에 옮겼으므로 이를 import하여 사용할 수 있도록 하고 잘 동작할 수 있도록 위와같이 적절하게 수정합니다.

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

Couter.js도 위와같이 `observer` 사용을 위해 mobx-react 모듈을 import하고 Counter 클래스를 `observer` 함수로 감싸줍니다. 또한 함수 사용 등을 위해 counterStore.js를 import하여 잘 동작할 수 있도록 적절하게 수정해줍니다.

이와같은 리팩토링 과정을 통해 기존 setState예제와 마찬가지로 MobX를 사용해서 멀티카운터 예제를 동일하게 구현하실 수 있습니다.

### 4) decorator를 써서 MobX 적용 해보기

위에서 데코레이터(`@`)를 쓰지 않고 MobX를 사용하는 방법에 대해서 알아보았는데 보통 MobX는 쉽고 직관적인 `@`데코레이터를 사용하여 정의하는것이 일반적입니다. 이를 사용하기 위해서는 아래와 같은 babel설정을 별도로 해야만 합니다.

```bash
npm install --save-dev @babel/plugin-proposal-decorators
```

모듈 설치이후 폴더의 루트에 `.babelrc` 파일을 만들어 아래 내용 추가합니다.

```json
{
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}]
    ]
}
```

이제부터 `@` 데코레이터를 사용해서 MobX를 사용할 수 있습니다. 코드가 어떤식으로 간결해질 수 있는지 확인해 봅시다.

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

데코레이터를 사용하지 않았을 때는 decorate 함수를 클래스 밖에 따로 선언해야했는데 지금은 적용을 원하는 MobX 개념이 있으면 적용을 해야 할 라인 위에 `@`와 개념을 옆에 적으면 됩니다.

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

observer 개념을 적용하는것도 마찬가지 입니다. 기존에는 observer함수로 클래스를 감싸는 형태로 구현했는데 데코레이터를 사용하면 감쌀 필요없이 클래스 바로위에 `@observer`를 적으면 observer가 적용됩니다.


## 출처
1. [Mobx-react 기본 개념 및 사용법 1 (살짝 어려움 주의)](https://helloinyong.tistory.com/175)