import counter1 from './counter1'
import * as types from '../action-types'
describe('测试reducer1 counter1',()=>{
    test(`
        测试counter1 是否存在
    `,()=>{
        expect(counter1).toBeTruthy()
    })

    test(`
        获取counter1默认值
    `,()=>{
        expect(counter1(undefined,{type:'@@REDUX/INIT'})).toEqual({number:0})
    })

    test(`
        INCREMENT1可以让number加一
    `,()=>{
        expect(counter1(undefined,{type:types.INCREMENT1})).toEqual({number:1})
    })
    
    test(`
        DECREMENT1可以让number减一
    `,()=>{
        expect(counter1(undefined,{type:types.DECREMENT1})).toEqual({number:-1})
    })
})