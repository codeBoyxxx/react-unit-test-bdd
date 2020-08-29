import actions from './counter1'
import * as types from '../action-types'

describe('测试action counter1',()=>{
    test(`
        测试counter1 是否存在
    `,()=>{
        expect(actions).toBeTruthy()
    })

    test(`
        测试counter1返回值：{type:'INCREMENT1'}
    `,()=>{
        expect(actions.INCREMENT1()).toEqual({type:types.INCREMENT1})
    })
})