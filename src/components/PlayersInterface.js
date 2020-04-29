import React from 'react'
import './PlayersInterface.css';

function PlayersInterface(props) {

  function resetGame(props) {
    props.setCurrPlayer("player1")
    props.setScores({player1: 0, player2: 0})
    props.setNumCards()
  }
  return (
    <div className="players-interface">
      <h1>Scores</h1>
      <div className="scores">
        <span><h2 className="players">Player 1: {props.scores.player1}</h2></span>
        <span><h2 className="players">Player 2: {props.scores.player2}</h2></span>
      </div>
      <button onClick={() => resetGame(props)}>Quit Game</button>
    </div>
  )
}

export default PlayersInterface
