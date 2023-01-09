import React from 'react';
import CardsNumberButton from "./CardsNumberButton";

const NUM_CARDS = [8, 16, 24]

function CardsSelect(props) {
  return (
    <section className="CardsSelect">
      <h1>Number of Cards</h1>
      { NUM_CARDS.map(cardsNumber => {
        return <CardsNumberButton cardsNumber={cardsNumber} setNumCards={props.setNumCards} />
      })}
    </section>
  );
}

export default CardsSelect;
