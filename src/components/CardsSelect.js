import React, {useState, useEffect} from 'react';

function CardsSelect(props) {
  return (
    <section className="CardsSelect">
      <h1>Number of Cards</h1>
      <button onClick={() => props.setView(1)}>8</button>
      <button>16</button>
      <button>24</button>
    </section>
  );
}

export default CardsSelect;
