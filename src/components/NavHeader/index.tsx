import React from 'react'
import { Link } from 'react-router-dom'

export default function (){
    return (
        <div>
            <div>
                <Link to='counter1'><button>counter1</button></Link>
                <Link to='counter2'><button>counter2</button></Link>
            </div>
        </div>
    )
}