import React from 'react';

function CardsNumberButton({ cardsNumber, setNumCards }) {

  return (
    <button style={{ margin: 1 + 'rem' }} onClick={() => setNumCards(cardsNumber)}>{cardsNumber}</button>
  );
}

export default CardsNumberButton;