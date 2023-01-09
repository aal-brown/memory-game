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

//Making the cards instances of a class will allow me to add methods if necessary that will be applied equally to all. It will also make it simpler to create the objects.

let imageArray = [bobOmb, bowser, goomba, koopa, luigi, mario, mushroom, peach, piranhaPlant, star, toad, yoshi];

class Card {
  constructor(id, front) {
    this.id = id
    this.back = questionBlock
    this.front = front
    this.view = this.back
  }
}

let createCardsArr = function(imageArray) {
  let cardsArray = [];

  for (let i = 0; i < imageArray.length; i ++) {
    cardsArray.push(new Card(i+1, imageArray[i]))
  }

  return cardsArray;
}

let cardsArray = createCardsArr(imageArray)

export default cardsArray;


