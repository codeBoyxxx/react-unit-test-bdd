import React from 'react'
import { connect } from 'react-redux'
import actions from '../../store/actions/counter1'
function Counter1 (props){
    return (
        <div>
            <p>counter1:{props.number}</p>
            <br/>
            <button className='changeBtn' id='counter1-increment' onClick={()=>props.INCREMENT1()}>+</button>
            <button className='changeBtn'  onClick={()=>props.DECREMENT1()}>-</button>
            <button className='changeBtn' onClick={()=>props.ASYNCINCREMENT1()}>异步+</button>
        </div>
    )
}

export default connect(
    state=>state.counter1,
    actions
)(Counter1)