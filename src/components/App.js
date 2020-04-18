import React, {useState, useEffect} from 'react';
import "./CardsSelect"
import './App.css';
import CardsSelect from './CardsSelect';
import { createGameCardsArray } from './card-functions'
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
        <div>
          <img src={yoshi} alt="Error"/>
          <img src={bobOmb} alt="Error"/>
          <img src={bowser} alt="Error"/>
          <img src={goomba} alt="Error"/>
          <img src={koopa} alt="Error"/>
          <img src={luigi} alt="Error"/>
          <img src={mario} alt="Error"/>
          <img src={mushroom} alt="Error"/>
          <img src={peach} alt="Error"/>
          <img src={piranhaPlant} alt="Error"/>
          <img src={questionBlock} alt="Error"/>
          <img src={star} alt="Error"/>
          <img src={toad} alt="Error"/>
        </div>
      )}
    </div>
  )
};

export default App;
