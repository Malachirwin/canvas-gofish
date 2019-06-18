import React from 'react';
import '../App.css';
import PlayerView from './playerView';
import CenterView from './centerView';
import PropTypes from 'prop-types';

class GameView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: props.game,
      targetPlayer: '',
      targetCard: '',
      logs: []
    }
  }

  static propTypes = {
    onload: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired
  }

  selectThePlayer(bot) {
    this.setState({targetPlayer: bot})
  }

  selectTheCard(card) {
    this.setState({targetCard: card})
  }

  reset() {
    this.setState({targetPlayer: "", targetCard: ""})
    if (this.state.game.winner() !== false) {
      this.props.onload()
    }
  }

  render() {
    if (this.state.game.winner() === false) {
      if (this.state.game.player().cardsLeft() === 0) { this.skipPlayer() }
      return this.gameHtml()
    } else {
      this.props.onload(this.state.game)
    }
  }

  gameHtml() {
    return (
    <div className="center">
      <CenterView game={this.state.game} targetPlayer={this.state.targetPlayer} clicked={this.selectThePlayer.bind(this)} />
      <PlayerView reset={this.reset.bind(this)} targetPlayer={this.state.targetPlayer} clicked={this.selectTheCard.bind(this)} game={this.state.game} player={this.state.game.player()} logs={this.state.logs} targetCard={this.state.targetCard}/>
    </div>
    )
  }

  skipPlayer() {
    this.state.game.nextTurn()
    this.state.logs.unshift(...this.state.game.botTurns())
    if (this.state.game.winner() !== false) {
      this.props.onload()
    }
  }
}
export default GameView
