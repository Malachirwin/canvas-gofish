import CardDeck from '../models/cardDeck'
import React from 'react'
import cardBack from '../public/cards/backs_custom.jpg'
import PropTypes from 'prop-types';
const hash = {}
new CardDeck().cards().forEach((card) => {
  hash[card.value()] = require(`../public/cards/${card.toImgPath()}`)
})

class CardView extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    if (this.props.value) {
      return <img className={this.props.classes} onClick={this.props.onClick} alt="card" src={hash[this.props.value]} />
    }
    return <img className="card-back" alt="Card Back" src={cardBack} />
  }
}
export default CardView
