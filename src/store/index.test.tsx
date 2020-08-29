import store from './'
import * as types from './action-types'
import actions from './actions/counter1'
describe('测试store',()=>{
    beforeEach(function(){
        store.dispatch({type:types.RESET})
    })

    test(`
        测试store是否存在
    `,()=>{
        expect(store).toBeTruthy()
    })

    test(`
        测试store初始状态
    `,()=>{
        expect(store.getState()).toMatchObject({
            counter1:{number:0},
            counter2:{number:0}
        })
    })

    test(`
        派发INCREMENT1动作后counter1的state变为{number:1}
    `,()=>{
        store.dispatch({type:types.INCREMENT1})
        expect(store.getState()).toMatchObject({
            counter1:{number:1},
            counter2:{number:0}
        })
    })

    test(`
        派发DECREMENT1动作后counter1的state变为{number:-1}
    `,()=>{
        store.dispatch({type:types.DECREMENT1})
        expect(store.getState()).toMatchObject({
            counter1:{number:-1},
            counter2:{number:0}
        })
    })
    

    test(`
        异步+1
    `,()=>{
        store.dispatch(actions.ASYNCINCREMENT1() as any)
        setTimeout(()=>{
            expect(store.getState()).toMatchObject({
                counter1:{number:-1},
                counter2:{number:0}
            })
        })
    })
})