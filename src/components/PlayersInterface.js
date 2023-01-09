import React from 'react'
import './PlayersInterface.css';
import ResetButton from "./ResetButton";

function PlayersInterface({ resetGame, scores }) {
  return (
    <div className="players-interface">
      <h1>Scores</h1>
      <div className="scores">
        <span><h2 className="players">Player 1: {scores.player1}</h2></span>
        <span><h2 className="players">Player 2: {scores.player2}</h2></span>
      </div>
      <ResetButton resetGame={resetGame}>
        Quit Game
      </ResetButton>
    </div>
  )
}

export default PlayersInterface
