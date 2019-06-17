import React from 'react';
import App from '../../views/App';
import { shallow } from 'enzyme';
import Game from '../../models/game'
import 'jest-enzyme'

describe('App', () => {
  it('renders login', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toIncludeText('<Login />')
  });
  
  it('renders Game', () => {
    const wrapper = shallow(<App game={new Game("Malachi")}/>)
    wrapper.setState({view: ''})
    expect(wrapper).toIncludeText('<GameView />')
    expect(wrapper).toHaveState('game')
  });

  it('renders EndGame', () => {
    const wrapper = shallow(<App game={new Game("Malachi")}/>)
    wrapper.setState({view: 'EndGame'})
    expect(wrapper).toIncludeText('<EndGame />')
  }) 
})
