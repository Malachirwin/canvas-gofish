import React from 'react';
import '../App.css';

class EndGame extends React.Component {
  onSubmit(event) {
    event.preventDefault()
    this.props.onload()
  }

  render() {
    return (
      <div className="center">
        {this.playerPointsHtml()}
        <button onClick={this.props.onload.bind(this)}>Rejoin</button>
      </div>
    )
  }

  playerPointsHtml() {
    const players = this.props.game.winner()
    const winners = players.filter(player => players[0].points() === player.points())
    const others = players.filter(pl => !winners.includes(pl))
    return [this.winnerClanHtml(winners), others.map((pl, index) => <h3 key={index}>{pl.name()} had {pl.points()} point(s)</h3>)]
  }

  winnerClanHtml(players) {
    if (players.length === 1) {
      return <h1 key="winners">{players[0].name()} won with {players[0].points()} points</h1>
    } else if (players.length === 2) {
      return <h1 key="winners">{players.map(pl => pl.name()).join(' and ')} tied with {players[0].points()} points</h1>
    }
    return <h1 key="winners">{players[0].name()}, {players[1].name()}, and {players[2].name()} tied with {players[0].points()} points</h1>
  }
}

export default EndGame
