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
  })
})
