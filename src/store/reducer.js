import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val,
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val,
            }
        case actionTypes.ADD_TO_STORE:
            return {
                ...state,
                results: state.results.concat({id: Math.random(), val: state.counter})
            };
        case actionTypes.REMOVE_FROM_STORE:
            const updatedArray = state.results.filter(result => result.id !== action.elementId);
            return {
                ...state,
                results: updatedArray,
            }
        default:
            return state;
    }
}

export default reducer;