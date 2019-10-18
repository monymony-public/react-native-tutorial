import {TOGGLE_LOADING} from '../actions/types';

const initialState = {
  isLoading: true,
};

function loading(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {...state, isLoading: !state.isLoading};
    default:
      return state;
  }
}

export default loading;
