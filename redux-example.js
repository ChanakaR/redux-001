const redux = require('redux');

const initialState = {
    counter: 1
}

// Root Reducer
const rootReducer = (state = initialState,action) => {
    if(action.type === "INC_COUNTER"){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    return state;
}

// Store
const store = redux.createStore(rootReducer);
store.subscribe(() => {
    console.log('SUBSCRIPTION', store.getState());
});



console.log(store.getState());

store.dispatch({type: "INC_COUNTER"});

console.log(store.getState());
// Subscription Model