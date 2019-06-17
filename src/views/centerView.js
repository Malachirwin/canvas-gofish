import React from 'react';
import '../App.css';
import BotView from './botView'
import CardView from './cardView';
import PropTypes from 'prop-types';

class CenterView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    targetPlayer: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <div className="flex-container">
          <BotView player={this.props.game.players()[1]} clicked={this.props.clicked} targetPlayer={this.props.targetPlayer}/>
          <BotView player={this.props.game.players()[2]} clicked={this.props.clicked} targetPlayer={this.props.targetPlayer}/>
          <BotView player={this.props.game.players()[3]} clicked={this.props.clicked} targetPlayer={this.props.targetPlayer}/>
        </div>
        <div className="playing-space">{(this.props.game.deck().hasCards() === true) ? <CardView index={0}/> : ""}</div>
      </div>
    )
  }
}
export default CenterView
