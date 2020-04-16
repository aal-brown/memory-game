import React, {useState, useEffect} from 'react';
import "./CardsSelect"
import './App.css';
import CardsSelect from './CardsSelect';
import { createGameCardsArray } from './card-functions'

function App() {
  let cardsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  console.log(createGameCardsArray(cardsArray,8))

  const [view, setView] = useState(0)
  
  return (
    <div className="App">
      { view === 0 && (
        <CardsSelect 
        setView={setView}
        />
      )} 
      { view === 1 && (
        <div>test</div>
      )}
    </div>
  )
};

export default App;
