import React from 'react';
import BotView from '../../views/botView';
import Player from '../../models/player';
import Card from '../../models/card';
import { shallow } from 'enzyme';
import 'jest-enzyme'

describe('BotView', () => {
  it('renders cards', () => {
    const player = new Player('Malachi', [new Card('3', 'H'), new Card('5', 'D'), new Card('A', 'C'), new Card('J', 'S'), new Card('K', 'D')]) 
    const callBack = (name) => { return name }
    const wrapper = shallow(<BotView player={player} targetPlayer="Malachi" clicked={callBack.bind(this)}/>)
    expect(wrapper.find('CardView').length).toEqual(5)
  });

  it('renders bot name', () => {
    const player = new Player('Malachi') 
    const callBack = (name) => { return name }
    const wrapper = shallow(<BotView player={player} targetPlayer="Malachi" clicked={callBack.bind(this)}/>)
    expect(wrapper).toIncludeText('Malachi')
  });

  it('has matches', () => {
    const player = new Player('Malachi') 
    const callBack = (name) => { return name }
    player.match([new Card('A', 'H'), new Card('A', 'S'), new Card('A', 'D'), new Card('A', 'C')])
    const wrapper = shallow(<BotView player={player} targetPlayer="Malachi" clicked={callBack.bind(this)}/>)    
    expect(wrapper.find('.matches').length).toEqual(1)
  })
})