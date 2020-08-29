import React from 'react'
import { mount } from 'enzyme'
import Counter1 from './index'
import { Provider } from 'react-redux'
import store from '../../store'
describe('测试counter1',()=>{
    test(`
    1.首先看到一段文字counter1:0
    1.然后点击+，文字变成：counter1:1
    2.然后点击-，文字变成：counter1:0
    `,()=>{
        let wapper = mount(<Provider store={store}><Counter1/></Provider>)
        let p = wapper.find('p')
        expect(p).toHaveLength(1)
        expect(p.text()).toBe('counter1:0')
        let changeBtns = wapper.find('.changeBtn')
        expect(changeBtns).toHaveLength(3)
        expect(changeBtns.at(0).text()).toBe("+")
        expect(changeBtns.at(1).text()).toBe("-")
    })
})