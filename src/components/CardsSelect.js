import React, {useState, useEffect} from 'react';

function CardsSelect(props) {
  return (
    <section className="CardsSelect">
      <h1>Number of Cards</h1>
      <button onClick={() => props.setNumCards(8)}>8</button>
      <button onClick={() => props.setNumCards(16)}>16</button>
      <button onClick={() => props.setNumCards(24)}>24</button>
    </section>
  );
}

export default CardsSelect;
