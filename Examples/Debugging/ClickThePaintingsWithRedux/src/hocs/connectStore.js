import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '@/data/rootActions';

export default function connectStore(WrappedComponent) {
  return connect(
    state => state,
    dispatch => ({
      actions: bindActionCreators(actions, dispatch),
    }),
  )(WrappedComponent);
}
