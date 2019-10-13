import {combineReducers} from 'redux';
import * as ActionTypes from './rootActionTypes';

function paintings(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_PAINTINGS:
      return action.paintings;
    default:
      return state;
  }
}

function isLoading(state = false, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return true;
    case ActionTypes.HIDE_LOADING:
      return false;
    default:
      return state;
  }
}
export default combineReducers({paintings, isLoading});
