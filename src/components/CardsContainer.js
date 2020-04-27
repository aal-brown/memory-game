import React, {useState, useEffect} from 'react';
import cardsArray from './cardObjects.js'
import { createGameCardsArray } from './card-functions'
import CardItem from './CardItem.js';
import "./cardsContainer.css"

//On click this.view will be changed
//The reason I am using index as key is because I will not be changing the order of the elements or deleting them, and there is no other identifying characteristic of each card, since the card id's will not be unique. There will be two of each card ID in every game.
function CardsContainer(props) {
 
  let gameCardsArray = createGameCardsArray(cardsArray, props.numCards)
 
  let [cards, setCards] = useState(gameCardsArray)
  // Turn is either 1 or 2, when turn is equal to two, then the comparison will occur to check if the cards are the same.
  let [turn, setTurn] = useState(1)

  //This has to be done to make the original render. If we try to do it in the useEffect function it won't work because useEffect is asynchronous
  // This variable just works off of the values from the cards state, it doesn't need to be preserved between renders, because "cards" captures the state already.
  let gameCardsElementArr = cards.map((card, index) => {
      if(!card.view) { //This will be used for when a card is "removed" after a matching pair is found.
        return (
          <CardItem
          turn={turn}
          key={index}
          index={index}
          cards={cards}
          image={""}
          setCards={setCards}
          setTurn={setTurn}
          />
        )
      } else {
        return (
          <CardItem
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


  //I can stick the card generation inside of a useEffect?
  useEffect(() => {
    gameCardsElementArr = cards.map((card, index) => {
      if(!card.view) {
        return (
          <CardItem
          key={index}
          index={index}
          cards={cards}
          image={null}
          setCards={setCards}
          />
        )
      } else {
        return (
          <CardItem
          key={index}
          index={index}
          cards={cards}
          image={card.view}
          setCards={setCards}
          />
        )
      }
    })
  }, [cards])
  

  return (
    <section className="cardsContainer">
      {gameCardsElementArr}
    </section>
  );
}

export default CardsContainer;
