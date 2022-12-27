import React, {useState, useEffect} from 'react';
import './cardItem.css';

function CardItem(props) {

  // This component is way too big and knows way too much. It should have a single responsibility and that is to display the card that is passed into it. All other logic needs to be handled outside.
  // On click the card needs to know if it is already flipped, in which case nothing happens

  // If the props.turn is 1, then flip the clicked card and increment turn
  // If the props.turn is 2, switch to the other player, then flip all cards back over to their backs, and finally, flip the clicked card over, and set turn = 1

  //This is used to flip all of the cards back
  function resetCards(cardsArray) {
    let updatedCardsArray = cardsArray.map((value, index) => {
      if (value.view === value.front) {
        value.view = value.back
        return value
      }
      return value
    })
    return updatedCardsArray
  }
  // Checks if the flipped cards match, if they do it returns their indices
  function checkMatch(cardsArray) {
    let flippedCards = [];
    cardsArray.forEach((value, index) => {
      if (value.view === value.front) {
        flippedCards.push({value, index})
      }
    })
    if (flippedCards.length > 1) {
      if(flippedCards[0].value.view === flippedCards[1].value.view) {
        return [flippedCards[0].index, flippedCards[1].index]
      }
    }
  return false
  }

  function updateCards() {
    let cardsArr = [...props.cards]

    //If the card is "empty", don't do anything
    if (!props.image) {
      return
    }
    if (props.turn <= 1) {
      if (props.image === props.cards[props.index].back) {
        props.setTurn((prev) => prev + 1)
        cardsArr[props.index].view = props.cards[props.index].front
        props.setCards(cardsArr)
        
        let matchArr = checkMatch(cardsArr)

        if(matchArr) {
          props.setScores({...props.scores, [props.currPlayer]: props.scores[props.currPlayer] + 1})
          cardsArr[matchArr[0]].view = ""
          cardsArr[matchArr[1]].view = ""
          props.setCards(cardsArr)
        }
        
      }
    } else {
      if (props.image === props.cards[props.index].back) {
        props.setCurrPlayer((props.currPlayer === "player1" ? "player2" : "player1"))
        props.setTurn(1)
        let updatedCardsArray = resetCards(cardsArr)
        updatedCardsArray[props.index].view = props.cards[props.index].front
        props.setCards(updatedCardsArray)
      }
    }
  return
}

  return (
    <div className="cardItem">
      <img onClick={updateCards} src={`${props.image}`} alt="Error"/>
    </div>
  );
}

export default CardItem;
