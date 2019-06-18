import React from 'react';
import PlayerView from '../../views/playerView';
import Game from '../../models/game'
import Card from '../../models/card'
import { shallow, mount } from 'enzyme';
import 'jest-enzyme'

describe('PlayerView', () => {
  let wrapper
  let game
  beforeEach(() => {
    game = new Game("Malachi")
    wrapper = shallow(<PlayerView game={game} player={game.player()} targetCard={'3'} reset={() => 'reset the selected card'} targetPlayer={'Malachi'} clicked={() => 'card selected'} logs={[]}/>)

  })

  it('has a player Name', () => {
    expect(wrapper).toIncludeText('Malachi')
  });

  it('has five cards', () => {
    expect(wrapper.find('CardView').length).toEqual(5)
  })

  describe('mount', () => {
    let element
    beforeEach(() => {
      game.player().match([new Card('A', 'H'), new Card('A', 'S'), new Card('A', 'D'), new Card('A', 'C')])
      element = mount(<PlayerView game={game} player={game.player()} targetCard={game.player().playerHand()[0].rank()} reset={() => 'reset the selected card'} targetPlayer={'Malachi'} clicked={() => 'card selected'} logs={[]}/>)
    })

    it('highlights cards the targetCard it the same as the rank', () => {
      expect(element.find('.highlight')).toExist()
    })
  
    it('has matches', () => {
      expect(element.find('.matches').length).toEqual(1)
    })
  
    it('has game log', () => {
      expect(element.find('.log').length).toEqual(1)
      expect(element.find('.book').length).toEqual(1)
    })

    it('has game request button', () => {
      expect(element.find('button').length).toEqual(1)
    })

    it('has game request button unless the targets are blank', () => {
      const element2 = mount(<PlayerView game={game} player={game.player()} targetCard='' reset={() => 'reset the selected card'} targetPlayer='' clicked={() => 'card selected'} logs={[]}/>)
      expect(element2.find('button').length).toEqual(0)
    })
  })
})
