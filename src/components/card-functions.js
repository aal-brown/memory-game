let cardsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

//Assuming they select 8 cards. It should be 8 cards selected at Random
let getRandomCards = function (cardsArray, numCards) {
  let cardsArrayCopy = [...cardsArray];
  let randomCards = [];
  let counter = 1;
  let randIndex = 0;

  while (counter <= numCards/2) {
    randIndex = Math.floor(Math.random() * (cardsArrayCopy.length - 1))
    randomCards.push(...cardsArrayCopy.splice(randIndex, 1))
    counter++
  }

return randomCards;
}

let shuffleCards = function(cardsArray) {
  let cardsArrayCopy = [...cardsArray];
  let shuffledArray = [];
  let randIndex = 0;
  let counter = 1;

  while (cardsArrayCopy.length) {
    randIndex = Math.floor(Math.random() * (cardsArrayCopy.length - 1))
    shuffledArray.push(...cardsArrayCopy.splice(randIndex, 1))
    counter++
  }
  // This overwrites the fact that the same cards will have the same memory address.
  for (let i = 0; i < shuffledArray.length; i++) {
    shuffledArray[i] = {...shuffledArray[i]}
  }
  return shuffledArray;
}

export function createGameCardsArray(cardsArray, numCards) {
  let selectedCardsArr = getRandomCards(cardsArray, numCards);
  let shuffledCardsArr = shuffleCards([...selectedCardsArr, ...selectedCardsArr])
  
  return shuffledCardsArr;
}