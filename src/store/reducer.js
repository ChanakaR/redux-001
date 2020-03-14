const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState,action) => {

    switch(action.type){
        case "INC":
            return {
                ...state,
                counter: state.counter + 1,
            }
        case "DEC":
            return {
                ...state,
                counter: state.counter - 1,
            }
        case "ADD":
            return {
                ...state,
                counter: state.counter + action.val,
            }
        case "SUB":
            return {
                ...state,
                counter: state.counter - action.val,
            }
        case "ADD_TO_STORE":
            return {
                ...state,
                results: state.results.concat({id: Math.random(), val: state.counter})
            };
        case "REMOVE_FROM_STORE":

            return state;
        default:
            return state;
    }
}

export default reducer;