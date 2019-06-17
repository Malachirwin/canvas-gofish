import React from 'react';
import '../App.css';
import CardView from './cardView';
import PropTypes from 'prop-types';

class BotView extends React.Component {
  static propTypes = {
    targetPlayer: PropTypes.string.isRequired,
    player: PropTypes.object.isRequired,
    clicked: PropTypes.func.isRequired
  }
  
  cards() {
    return this.props.player.playerHand().map((card, index) => <CardView key={index}/>)
  }

  matchesHtml() {
    return this.props.player.matches().map((match, index) => <div key={index} className="matches inbetween-match">{match.map((card, i) => <CardView key={i} value={card.value()} classes={'match'} onClick={this.props.clicked.bind(this, card.rank())} /> )}</div>)
  }

  classes() {
    if (this.props.targetPlayer === this.props.player.name()) {
      return 'bot highlight-player'
    }
    return 'bot'
  }

  render() {
    return (
      <div className={this.classes()} onClick={this.props.clicked.bind(this, this.props.player.name())}>
        <h3>{this.props.player.name()}</h3>
        {this.cards()}
        <div className="matchesWrapper">{this.matchesHtml()}</div>
      </div>
    )
  }
}
export default BotView