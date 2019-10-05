// 액션에 매칭되는 state를 반환하는 순수함수 리듀서를 정의한다.

const initialState = {
    counter : [
        {
            counterNum : 0,
        },
    ],
};

// 리듀서 함수, (state, action) => return state

const counter = (state = initialState, action) => {
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

        case 'ADD' :
            return({
                counter : [
                    ...counter,
                    {
                       counterNum : 0,
                    },
                ]
            });

        case 'REMOVE' :
            return({
                counter : counter.slice(0, counter.length - 1),
            });

        default :
            return state;
    }
}

export default counter;