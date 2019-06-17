import React from 'react';
import EndGame from '../../views/endGame';
import Card from '../../models/card'
import Game from '../../models/game'
import { shallow } from 'enzyme';
import 'jest-enzyme'

describe('EndGame', () => {
  let wrapper, game
  beforeEach(() => {
    game = new Game("Malachi")
    game.player().setHand([new Card('6', 'H'), new Card('6', 'S'), new Card('6', 'D'), new Card('6', 'C'), new Card('3', 'H'), new Card('3', 'S'), new Card('3', 'D'), new Card('3', 'C')])
    game.players()[1].setHand([new Card('6', 'H'), new Card('6', 'S'), new Card('6', 'D'), new Card('6', 'C')])
    game.pair()
    game.removeAllCardsFromDeck()
    game.players()[2].setHand([])
    game.players()[3].setHand([])
    const callBack = () => { return 'Starting up your new Game' }
    wrapper = shallow(<EndGame onload={callBack} game={game}/>)
  })

  it('has your name with the number of points', () => {
    expect(wrapper.html()).toContain(`Malachi won with 2 points`)
  })

  it('has other players points', () => {
    expect(wrapper.html()).toContain(`${game.players()[1].name()} had 1 point(s)`)
  })

  it('shows ties', () => {
    game.players()[1].match([new Card('A', 'H'), new Card('A', 'S'), new Card('A', 'D'), new Card('A', 'C')])
    wrapper.setState({game: game})
    expect(wrapper.html()).toContain(`${game.players()[0].name()} and ${game.players()[1].name()} tied with 2 points`)
  })

  it('shows three way ties', () => {
    game.players()[1].match([new Card('A', 'H'), new Card('A', 'S'), new Card('A', 'D'), new Card('A', 'C')])
    game.players()[2].match([new Card('9', 'H'), new Card('9', 'S'), new Card('9', 'D'), new Card('9', 'C')])
    game.players()[2].match([new Card('K', 'H'), new Card('K', 'S'), new Card('K', 'D'), new Card('K', 'C')])
    wrapper.setState({game: game})
    expect(wrapper.html()).toContain(`${game.players()[0].name()}, ${game.players()[1].name()}, and ${game.players()[2].name()} tied with 2 points`)
  })
})
