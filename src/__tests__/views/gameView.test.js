import React from 'react';
import { shallow, mount } from 'enzyme';
import GameView from '../../views/gameView'
import Game from '../../models/game'
import 'jest-enzyme'

describe('GameView', () => {
  let game
  beforeEach(() => {
    game = new Game('Malachi')
  })

  it('renders PlayerView', () => {
    const wrapper = shallow(<GameView onload={jest.fn()} game={game}/>)
    expect(wrapper).toIncludeText('<PlayerView />')
  });
  
  it('renders Game', () => {
    const wrapper = shallow(<GameView onload={jest.fn()} game={game}/>)
    expect(wrapper).toHaveClassName('center')
  });

  it('updates state and highlights a card when it is clicked', () => {
    const wrapper = mount(<GameView onload={jest.fn()} game={game}/>)
    const card = wrapper.find('.card-in-hand').first()
    card.simulate('click')
    expect(card.html()).toContain('highlight')
    expect(wrapper.state('targetCard')).not.toEqual('')
  })

  it('displays a button if target card and player are not blank', () => {
    const wrapper = mount(<GameView onload={jest.fn()} game={game}/>)
    wrapper.find('.card-in-hand').first().simulate('click')
    wrapper.find('.bot').first().simulate('click')
    expect(wrapper.find('button').first()).toHaveText('Request')
  })

  it('runs a round', () => {
    const wrapper = mount(<GameView onload={jest.fn()} game={game}/>)
    wrapper.find('.card-in-hand').first().simulate('click')
    wrapper.find('.bot').first().simulate('click')
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    expect(wrapper.state('logs')[wrapper.state('logs').length - 1]).toContain(game.player().name())
  })
})
