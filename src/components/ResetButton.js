import React from 'react';

const ResetButton = ({ children, resetGame }) => {
  return (
    <button onClick={resetGame}>{children}</button>
  )
}

export default ResetButton