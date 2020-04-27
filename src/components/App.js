import React, {useState, useEffect} from 'react';
import "./CardsSelect"
import './App.css';
import CardsSelect from './CardsSelect';
import CardsContainer from "./CardsContainer"

import yoshi from "./images/yoshi-rs.png"
import bobOmb from "./images/bob-omb-rs.png"
import bowser from "./images/bowser-rs.png"
import goomba from "./images/goomba-rs.png"
import koopa from "./images/koopa-rs.png"
import luigi from "./images/luigi-rs.png"
import mario from "./images/mario-rs.png"
import mushroom from "./images/mushroom-rs.png"
import peach from "./images/peach-rs.png"
import piranhaPlant from "./images/piranha-plant-rs.png"
import questionBlock from "./images/question-block.png"
import star from "./images/star-rs.png"
import toad from "./images/toad-rs.png"


//WHen we click on the number of cards we want, the view will go to the cardsContainer, cardsContainer will receive the the number of cards to generate as props. It will pass this data down to the 
// <button onClick={setClicks((prev) => prev+1)}>{clicks}</button>
function App() {

  const [numCards, setNumCards] = useState(0)
  
  return (
    <div className="App">
      { !numCards && (
        <CardsSelect 
        setNumCards={setNumCards}
        />
      )} 
      { numCards && (
        <CardsContainer 
        numCards={numCards}
        />
      )}
    </div>
  )
};

export default App;
