import React from 'react'
import { connect } from 'react-redux'
import actions from '../../store/actions/counter1'
function Counter1 (props){
    return (
        <div>
            <p>counter1:{props.number}</p>
            <br/>
            <button onClick={()=>props.INCREMENT1()}>+</button>
            <button onClick={()=>props.DECREMENT1()}>-</button>
        </div>
    )
}

export default connect(
    state=>state.counter1,
    actions
)(Counter1)