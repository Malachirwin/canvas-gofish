import React from 'react';
import Login from '../../views/Login';
import { shallow } from 'enzyme';
import 'jest-enzyme'

describe('Login', () => {
  let wrapper, userName, callBack
  beforeEach(() => {
    callBack = (name) => { userName = name }
    wrapper = shallow(<Login onload={callBack}/>)
  })

  it('renders a label and has state name', () => {
    expect(wrapper).toIncludeText('Name')
    expect(wrapper).toHaveState('name')
  });

  it('has a play button', () => {
    expect(wrapper).toIncludeText('Play')
  });

  it('allows you to submit a name', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'Malachi' }
    })
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    expect(wrapper.find('input')).toHaveValue('Malachi')
    expect(wrapper.state('name')).toEqual('Malachi')
    expect(userName).toEqual('Malachi')
  })
})
