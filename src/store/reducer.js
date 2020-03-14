const initialState = {
    counter: 0,
}

const reducer = (state = initialState,action) => {

    switch(action.type){
        case "INC":
            return {
                counter: state.counter + 1,
            }
        case "DEC":
            return {
                counter: state.counter - 1,
            }
        case "ADD":
            return {
                counter: state.counter + action.val,
            }
        case "SUB":
            return {
                counter: state.counter - action.val,
            }
        default:
            return state;
    }
}

export default reducer;