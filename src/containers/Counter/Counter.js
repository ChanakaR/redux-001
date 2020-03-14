import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incCounter} />
                <CounterControl label="Decrement" clicked={this.props.decCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.subCounter}  />
                <hr></hr>
                <button onClick={this.props.storeCounter}>Store Counter Value</button>
                <ul>
                    {this.props.resultStore.map(result => (
                        <li key={result.id} onClick={() => this.props.removeCounter(result.id)} >{result.val}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        resultStore: state.results,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        decCounter: () => dispatch({ type:actionTypes.DECREMENT }),
        addCounter: () => dispatch({ type:actionTypes.ADD , val: 5 }),
        subCounter: () => dispatch({ type:actionTypes.SUBTRACT , val: 5 }),
        storeCounter: () => dispatch({ type:actionTypes.ADD_TO_STORE }),
        removeCounter: (id) => dispatch({ type:actionTypes.REMOVE_FROM_STORE , elementId : id }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);