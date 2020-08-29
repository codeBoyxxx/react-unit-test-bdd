import * as types from '../action-types'

export default {
    INCREMENT1(){
        return {type:types.INCREMENT1}
    },
    DECREMENT1(){
        return {type:types.DECREMENT1}
    },
    ASYNCINCREMENT1(){
        return function(dispatch,getState){
            setTimeout(()=>{
                dispatch({type:types.INCREMENT1}) 
            },1000)
        }
    }
}