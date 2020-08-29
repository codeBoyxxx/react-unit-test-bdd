import * as types from '../action-types'


let initialState = {
    number:0
}
export default function (state=initialState,action){
    switch (action.type) {
        case types.INCREMENT1:
            return {...state,number:state.number+1}
        case types.DECREMENT1:
            return {...state,number:state.number-1}
        case types.RESET:
            return initialState
        default:
            return state
    }
}