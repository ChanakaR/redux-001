import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultsReducer = (state = initialState,action) => {

    switch(action.type){
        case actionTypes.ADD_TO_STORE:
            return {
                ...state,
                results: state.results.concat({id: Math.random(), val: action.counter})
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

export default resultsReducer;