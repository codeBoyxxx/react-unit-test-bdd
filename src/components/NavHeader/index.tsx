import React from 'react'
import { withRouter } from 'react-router-dom'

function NavHeader (props){
    return (
        <div>
            <div>
                <button className='navButton' id='counter1' onClick={()=>props.history.push('/counter1')}>counter1</button>
                <button className='navButton' id='counter2' onClick={()=>props.history.push('/counter2')}>counter2</button>
            </div>
        </div>
    )
}


export default withRouter(NavHeader)

