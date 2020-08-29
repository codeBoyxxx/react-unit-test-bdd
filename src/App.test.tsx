import React from 'react';
import { mount } from 'enzyme'
import App from './App';
describe('测试App组件',()=>{
  test(`
    1.用户进入首页，看到两个按钮，分别是counter1，counter2
    2.点击counter1,就能看到一段文字counter1:0,下面有两个按钮+-
    3.然后点击+，文字变成：counter1:1
    4.然后点击-，文字变成：counter1:0
    5.然后可以点击counter2按钮
  `,()=>{
    let wapper  = mount(<App/>)
    let p =  wapper.find('p')
    expect(p).toHaveLength(0)
    // 1.用户进入首页，看到两个按钮，分别是counter1，counter2
    let navButtons = wapper.find('.navButton')
    expect(navButtons).toHaveLength(2)
    expect(navButtons.at(0).text()).toBe('counter1')
    expect(navButtons.at(1).text()).toBe('counter2')
    // 2.点击counter1,就能看到一段文字counter1:0,下面有两个按钮+-
    let counter1Button = wapper.find('#counter1')
    counter1Button.simulate('click')
    p = wapper.find('p')
    expect(p).toHaveLength(1)
    expect(p.text()).toBe('counter1:0')
    let changeBtns = wapper.find('.changeBtn')
    expect(changeBtns).toHaveLength(3)
    expect(changeBtns.at(0).text()).toBe("+")
    expect(changeBtns.at(1).text()).toBe("-")
    // 3.然后点击+，文字变成：counter1:1
    changeBtns.at(0).simulate('click')
    p = wapper.find('p')
    expect(p).toHaveLength(1)
    expect(p.text()).toBe('counter1:1')
    // 4.然后点击-，文字变成：counter1:0
    changeBtns.at(1).simulate('click')
    p = wapper.find('p')
    expect(p).toHaveLength(1)
    expect(p.text()).toBe('counter1:0')
    // 5.然后可以点击counter2按钮
    let counter2Button = wapper.find('#counter2')
    counter2Button.simulate('click')
    p = wapper.find('p')
    expect(p).toHaveLength(1)
    expect(p.text()).toBe('counter2:0')
    changeBtns = wapper.find('.changeBtn')
    expect(changeBtns).toHaveLength(2)
    expect(changeBtns.at(0).text()).toBe("+")
    expect(changeBtns.at(1).text()).toBe("-")
  })
})
