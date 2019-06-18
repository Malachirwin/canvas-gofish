import React from 'react';
import BotView from '../../views/botView';
import Player from '../../models/player';
import Card from '../../models/card';
import { shallow } from 'enzyme';
import 'jest-enzyme'

describe('BotView', () => {
  let player, wrapper
  beforeEach(() => {
      player = new Player('Malachi', [new Card('3', 'H'), new Card('5', 'D'), new Card('A', 'C'), new Card('J', 'S'), new Card('K', 'D')])
      const callBack = (name) => { return name }
      player.match([new Card('A', 'H'), new Card('A', 'S'), new Card('A', 'D'), new Card('A', 'C')])
      wrapper = shallow(<BotView player={player} targetPlayer="Malachi" clicked={callBack.bind(this)}/>)    
  })
  it('renders cards', () => {
    expect(wrapper.find('.card-back').length).toEqual(5)
  });

  it('renders bot name', () => {
    expect(wrapper).toIncludeText('Malachi')
  });

  it('has matches', () => {  
    expect(wrapper.find('.matches').length).toEqual(1)
  })

  it('highlights it if player name is the target', () => {
    expect(wrapper).toHaveClassName('highlight-player')
  })
})
