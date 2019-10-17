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
