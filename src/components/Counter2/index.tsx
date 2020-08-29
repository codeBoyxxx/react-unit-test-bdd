import React from 'react'
import actions from '../../store/actions/counter2'
import { connect } from 'react-redux'
function Counter2(props){
    return (
        <div>
            <p>counter2:{props.number}</p>
            <br/>
            <button onClick={()=>props.INCREMENT2()}>+</button>
            <button onClick={()=>props.DECREMENT2()}>-</button>
        </div>
    )
}

export default connect(
    state=>state.counter2,
    actions
)(Counter2) 