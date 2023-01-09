import React, {useState, useEffect} from 'react';
import './cardItem.css';
import emptyImg from "./images/empty.png"

function CardItem({index, card, updateCards}) {
  // This component is way too big and knows way too much. It should have a single responsibility and that is to display the card that is passed into it. All other logic needs to be handled outside.
  // On click the card needs to know if it is already flipped, in which case nothing happens

  // If the props.turn is 1, then flip the clicked card and increment turn
  // If the props.turn is 2, switch to the other player, then flip all cards back over to their backs, and finally, flip the clicked card over, and set turn = 1

  //This is used to flip all of the cards back


  return (
    <div className="cardItem">
      <img onClick={() => updateCards(index)} src={`${card.view || emptyImg}`} alt="Error"/>
    </div>
  );
}

export default CardItem;
