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

  it('highlights cards the targetCard it the same as the rank', () => {
    const element = mount(<PlayerView game={game} player={game.player()} targetCard={game.player().playerHand()[0].rank()} reset={() => 'reset the selected card'} targetPlayer={'Malachi'} clicked={() => 'card selected'} logs={[]}/>)
    expect(element.find('.highlight')).toExist()
  })

  it('has matches', () => {
    game.player().match([new Card('A', 'H'), new Card('A', 'S'), new Card('A', 'D'), new Card('A', 'C')])
    const element = mount(<PlayerView game={game} player={game.player()} targetCard={game.player().playerHand()[0].rank()} reset={() => 'reset the selected card'} targetPlayer={'Malachi'} clicked={() => 'card selected'} logs={[]}/>)
    expect(element.find('.matches').length).toEqual(1)
  })

  it('has game log', () => {
    const element = mount(<PlayerView game={game} player={game.player()} targetCard={game.player().playerHand()[0].rank()} reset={() => 'reset the selected card'} targetPlayer={'Malachi'} clicked={() => 'card selected'} logs={['Malachi asked for the 10s and went fishing']}/>)
    expect(element.find('.log').length).toEqual(1)
    expect(element.find('.book').length).toEqual(2)
  })
})
