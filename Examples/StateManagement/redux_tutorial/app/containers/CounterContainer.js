import * as actions from '../actions';
import { connect } from 'react-redux';
import App from '../components/App';

// store 안의 state 값을 props 로 연결해줍니다.
/*
* store가 가진 state를 어떻게 props에 엮을지.
*
* 전달되는 인수 state는 state전체를 의미하므로 , 필요에 따라서 state.value 이런식으로 꺼내서 props에 연결하는 것이 맞다.
* */
const mapStateToProps = (state) => ({
    counter : state.counter,
});

/*
* 액션 생성자를 사용하여 액션을 생성하고,
* 해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*
* 리듀서에 액션을 알리는 함수 dispatch를 어떻게 props에 엮을지에 관한 동작을 정의하는 함수
*
* action 생성자(action creator)를 통해서 만들어진 action를 만들기만 했다고 해서 아무 일이 일어나지 않는다.
* 반드시 store에게 state가 업데이트 된다는 것을 알려줘야하는 dispatch함수에 넘겨져 실행되어야 합니다.
* */

const mapDispatchToProps = (dispatch) => ({
  handleIncrement : (index) => dispatch(actions.increment(index)),
  handleDecrement : (index) => dispatch(actions.decrement(index)),
  handleAddCounter : () => dispatch(actions.add()),
  handleRemoveCounter : () => dispatch(actions.remove()),
});


// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default CounterContainer;