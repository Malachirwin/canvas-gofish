import React from 'react';
import CenterView from '../../views/centerView';
import { shallow } from 'enzyme';
import Game from '../../models/game'
import 'jest-enzyme'

describe('CenterView', () => {
  it('renders BotViews three bots', () => {
    const callBack = (name) => { return name }
    const game = new Game('Malachi')
    const wrapper = shallow(<CenterView game={game} clicked={callBack.bind(this)} targetPlayer="Malachi"/>)
    expect(wrapper.find('BotView').length).toEqual(3)
  });
  
  it('renders center successfully', () => {
    const callBack = (name) => { return name }
    const game = new Game('Malachi')
    const wrapper = shallow(<CenterView game={game} clicked={callBack.bind(this)} targetPlayer="Malachi"/>)
    expect(wrapper.find('.flex-container')).toExist()
  });
})
