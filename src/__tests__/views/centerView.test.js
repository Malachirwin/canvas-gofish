import React from 'react';
import CenterView from '../../views/centerView';
import { shallow } from 'enzyme';
import Game from '../../models/game'
import 'jest-enzyme'

describe('CenterView', () => {
  let game, wrapper, callBack
  beforeEach(() => {
    callBack = (name) => { return name }
    game = new Game('Malachi')
    wrapper = shallow(<CenterView game={game} clicked={callBack.bind(this)} targetPlayer="Malachi"/>)
  })

  it('renders BotViews three bots', () => {
    expect(wrapper.find('BotView').length).toEqual(3)
  });
  
  it('renders center successfully', () => {
    expect(wrapper.find('.flex-container')).toExist()
    expect(wrapper.find('CardView').length).toEqual(1)

  });

  it('has a center card', () => {
    expect(wrapper.find('.playing-space')).toExist()
  })

  it("doesn't have a center card when the deck doesn't", () => {
    game.deck().removeAllCardsFromDeck()
    wrapper.setProps({game: game})
    expect(wrapper.find('CardView').length).toEqual(0)
  })
})
