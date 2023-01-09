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
  let [turn, setTurn] = useState(0)

  //This has to be done to make the original render. If we try to do it in the useEffect function it won't work because useEffect is asynchronous
  // This variable just works off of the values from the cards state, it doesn't need to be preserved between renders, because "cards" captures the state already.
  let gameCardsElementArr = cards.map((card, index) => {
      return (
        <CardItem
          key={index}
          index={index}
          card={card}
          updateCards={updateCards}
        />
      )
    })


  function resetCards(cardsArr) {
    let updatedCardsArray = cardsArr.map((card, index) => {
      if (card.view === card.front) {
        card.view = card.back
        return card
      }
      return card
    })
    return updatedCardsArray
  }

  // Checks if the flipped cards match, if they do it returns their indices
  function checkMatch(cardsArray) {
    let flippedCards = [];
    cardsArray.forEach((value, index) => {
      if (value.view === value.front) {
        flippedCards.push({ value, index })
      }
    })
    if (flippedCards.length > 1) {
      if(flippedCards[0].value.view === flippedCards[1].value.view) {
        return [flippedCards[0].index, flippedCards[1].index]
      }
    }
    return false
  }

  function handleMatch(matchArr, cardsArr) {
    props.setScores({...props.scores, [props.currPlayer]: props.scores[props.currPlayer] + 1})
    cardsArr[matchArr[0]].view = ""
    cardsArr[matchArr[1]].view = ""
    return cardsArr
  }

  // The key to note is that after the first player is done, the last two cards flipped remain flipped until the second
  // player starts.
  function updateCards(index) {
    let card = cards[index]
    let cardsArr = [...cards]

    // If card is already flipped, or has been "removed" don't do anything
    if (!card.view || card.view === card.front) {
      return
    }

    if (turn <= 1) {
        card.view = card.front // Flip the card
        cardsArr[index] = card // Overwrite the old card state in the cards array

        let matchArr = checkMatch(cardsArr) // Get matching cards

        if (matchArr) {
          setTurn(0) // If match is found, reset turn to 0, because
          cardsArr = handleMatch(matchArr, cardsArr) //
        } else {
          setTurn((prev) => prev + 1)
        }
          setCards(cardsArr)
    } else {
        props.setCurrPlayer((props.currPlayer === "player1" ? "player2" : "player1"))
        setTurn(1)
        cardsArr = resetCards(cardsArr)
        card.view = card.front
        cardsArr[index] = card
        setCards(cardsArr)
    }
    return
  }

  return (
    <section className={`cards${props.numCards}`}>
      {gameCardsElementArr}
    </section>
  );
}

export default CardsContainer;
