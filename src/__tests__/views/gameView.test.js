import React from 'react';
import { shallow, mount } from 'enzyme';
import GameView from '../../views/gameView'
import Game from '../../models/game'
import 'jest-enzyme'

describe('GameView', () => {
  let game, wrapper, wrapper2
  beforeEach(() => {
    game = new Game('Malachi')
    wrapper = mount(<GameView onload={jest.fn()} game={game}/>)
    wrapper2 = shallow(<GameView onload={jest.fn()} game={game}/>)
  })

  it('renders PlayerView', () => {
    expect(wrapper2).toIncludeText('<PlayerView />')
  });
  
  it('renders Game', () => {
    expect(wrapper2).toHaveClassName('center')
  });

  it('updates state and highlights a card when it is clicked', () => {
    const card = wrapper.find('.card-in-hand').first()
    card.simulate('click')
    expect(card.html()).toContain('highlight')
    expect(wrapper.state('targetCard')).not.toEqual('')
  })

  it('displays a button if target card and player are not blank', () => {
    wrapper.find('.card-in-hand').first().simulate('click')
    wrapper.find('.bot').first().simulate('click')
    expect(wrapper.find('button').first()).toHaveText('Request')
  })

  it('runs a round', () => {
    wrapper.find('.card-in-hand').first().simulate('click')
    wrapper.find('.bot').first().simulate('click')
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    expect(wrapper.state('game')._logs[wrapper.state('game')._logs.length - 1]).toContain(game.player().name())
  })
})
