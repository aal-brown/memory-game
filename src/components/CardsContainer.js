import React, {useState, useEffect} from 'react';
import cardsArray from './cardObjects.js'
import { createGameCardsArray } from './card-functions'
import CardItem from './CardItem.js';
import "./cardsContainer.css"
import emptyImg from "./images/empty.png"

//On click this.view will be changed
//The reason I am using index as key is because I will not be changing the order of the elements or deleting them, and there is no other identifying characteristic of each card, since the card id's will not be unique. There will be two of each card ID in every game.
function CardsContainer(props) {

  let conditionalClass = "cards8"

  switch(props.numCards) {
    case 16:
      conditionalClass = "cards16"
      break;
    case 24:
      conditionalClass = "cards24"
      break;
    default:
      break;
  }
 
  let gameCardsArray = createGameCardsArray(cardsArray, props.numCards)
 
  let [cards, setCards] = useState(gameCardsArray)
  // Turn is either 1 or 2, when turn is equal to two, then the comparison will occur to check if the cards are the same.
  let [turn, setTurn] = useState(0)

  //This has to be done to make the original render. If we try to do it in the useEffect function it won't work because useEffect is asynchronous
  // This variable just works off of the values from the cards state, it doesn't need to be preserved between renders, because "cards" captures the state already.
  let gameCardsElementArr = cards.map((card, index) => {
      if(!card.view) { //This will be used for when a card is "removed" after a matching pair is found.
        return (
          <CardItem
          currPlayer={props.currPlayer}
          setCurrPlayer={props.setCurrPlayer}
          scores={props.scores}
          setScores={props.setScores}
          turn={turn}
          key={index}
          index={index}
          cards={cards}
          image={emptyImg}
          setCards={setCards}
          setTurn={setTurn}
          />
        )
      } else {
        return (
          <CardItem
          currPlayer={props.currPlayer}
          setCurrPlayer={props.setCurrPlayer}
          scores={props.scores}
          setScores={props.setScores}
          turn={turn}
          key={index}
          index={index}
          cards={cards}
          image={card.view}
          setCards={setCards}
          setTurn={setTurn}
          />
        )
      }
    })


  //I can stick the card generation inside of a useEffect? This doesn't appear to be necessary?
  useEffect(() => {
    gameCardsElementArr = cards.map((card, index) => {
      if(!card.view) {
        return (
          <CardItem
          currPlayer={props.currPlayer}
          setCurrPlayer={props.setCurrPlayer}
          scores={props.scores}
          setScore={props.setScores}
          turn={turn}
          key={index}
          index={index}
          cards={cards}
          image={emptyImg}
          setCards={setCards}
          setTurn={setTurn}
          />
        )
      } else {
        return (
          <CardItem
          currPlayer={props.currPlayer}
          setCurrPlayer={props.setCurrPlayer}
          scores={props.scores}
          setScores={props.setScores}
          turn={turn}
          key={index}
          index={index}
          cards={cards}
          image={card.view}
          setCards={setCards}
          setTurn={setTurn}
          />
        )
      }
    })
  }, [cards])
  

  return (
    <section className={`${conditionalClass}`}>
      {gameCardsElementArr}
    </section>
  );
}

export default CardsContainer;
