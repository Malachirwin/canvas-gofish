import React from 'react';
import CardView from '../../views/cardView';
import { shallow } from 'enzyme';
import 'jest-enzyme'

describe('CardView', () => {
  it('returns card html', () => {
    const wrapper = shallow(<CardView value={'6 of Hearts'} classes={'card-in-hand'} onClick={jest.fn()} />)
    expect(wrapper).toHaveClassName('card-in-hand')
  });

  it('returns card back', () => {
    const wrapper = shallow(<CardView />)
    expect(wrapper).toHaveClassName('card-back')
  })
})
