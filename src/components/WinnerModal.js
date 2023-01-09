import React from 'react'
import './winnerModal.css';
import ResetButton from "./ResetButton";

function WinnerModal({ resetGame, scores }) {
  let findWinner = () => {
    let scoresArr = Object.entries(scores)
    if (scoresArr[0][1] == scoresArr[1][1]) {
      return [null, null]
    }
    return scoresArr[0][1] > scoresArr[1][1] ? scoresArr[0] : scoresArr[1]
  }

  let [winnerName, winnerScore]  = findWinner()

  return (
    <div className="winner-modal-container">
      <div className="winner-modal">
        { winnerName === null ? (
            <p>It was a tie!</p>
          ) : (
            <p>{`${winnerName} won with a score of ${winnerScore} points!`}</p>
          )
        }
        <ResetButton resetGame={resetGame}>
          Main Menu
        </ResetButton>
      </div>
    </div>
  )
}

export default WinnerModal

