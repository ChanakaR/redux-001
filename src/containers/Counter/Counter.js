import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                        <li key={result.id}>{result.val}</li>
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
        incCounter: () => dispatch({ type:"INC" }),
        decCounter: () => dispatch({ type:"DEC" }),
        addCounter: () => dispatch({ type:"ADD" , val: 5 }),
        subCounter: () => dispatch({ type:"SUB" , val: 5 }),
        storeCounter: () => dispatch({ type:"ADD_TO_STORE" })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);