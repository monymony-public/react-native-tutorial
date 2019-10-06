/*
* 1. state의 기본 값은 reducer의 인자에서만 선언할 수 있습니다.
* */
const initialState = {
    counter : [
        {
            counterNum : 0,
        },
    ],
};


/*
* 2. state는 전체 값을 의미합니다.
*    예를 들어 counterNum에 접근하고 싶다면 `state.counter.counterNum` 으로 접근할 수 있습니다.
* */
const CountingNumber = (state = initialState, action) => {
    const { counter } = state;

    switch(action.type){
        case 'INCREMENT' :
            return({
                counter : [
                    ...counter.slice(0, action.index),
                    {
                        counterNum : counter[action.index].counterNum + 1,
                    },
                    ...counter.slice(action.index+1, counter.length),
                ],
            });

        case 'DECREMENT' :
            return({
                counter : [
                    ...counter.slice(0, action.index),
                    {
                        counterNum : counter[action.index].counterNum - 1,
                    },
                    ...counter.slice(action.index+1, counter.length),
                ],
            });

        default :
            return state;
    }
}

export default CountingNumber;