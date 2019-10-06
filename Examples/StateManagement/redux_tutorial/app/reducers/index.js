import { combineReducers } from 'redux';

import { AddRemoveCounter, CountingNumber } from './modules';

/* 루트 리듀서가 모듈화된 각 리듀서를 합쳐서 하나의 트리 상태로 만들어 export 합니다 */

/* combineReducers 객체는 redux에서 제공하는 편리한 기능이지만 필수는 아닙니다.
* 상황에 따라서
* 1. 모듈화 하여 combineReducers를 사용하거나
* 2. 루트 리듀서에 다같이 정의할 수 있습니다.
* */

const counter = combineReducers({
        AddRemoveCounter,
        CountingNumber
});

export default counter;