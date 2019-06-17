import React from 'react';
import Login from '../../views/Login';
import { shallow } from 'enzyme';
import 'jest-enzyme'

describe('Login', () => {
  it('renders a label and has state name', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toIncludeText('Name')
    expect(wrapper).toHaveState('name')
  });

  it('has a play button', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toIncludeText('Play')
  });

  it('allows you to submit a name', () => {
    let userName
    const callBack = (name) => { userName = name }
    const wrapper = shallow(<Login onload={callBack}/>)
    wrapper.find('input').simulate('change', {
      target: { value: 'Malachi' }
    })
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    expect(wrapper.find('input')).toHaveValue('Malachi')
    expect(wrapper.state('name')).toEqual('Malachi')
    expect(userName).toEqual('Malachi')
  })
})
