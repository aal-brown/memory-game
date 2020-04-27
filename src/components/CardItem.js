import React, {useState, useEffect} from 'react';
import './cardItem.css';

function CardItem(props) {
  function test() {

    let cardsArr = [...props.cards]
    if (!props.image) {
      return
    }
    if(props.image === props.cards[props.index].back) {
      cardsArr[props.index].view = props.cards[props.index].front
      props.setCards(cardsArr)
      // props.setTurn((prev) => prev + 1)
    }
  }

  return (
    <div className="cardItem">
      <img onClick={test} src={`${props.image}`} alt="Error"/>
    </div>
  );
}

export default CardItem;
