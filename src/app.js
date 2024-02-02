/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //DOM variables
  const left = document.querySelector("#myCard").childNodes[1];
  const number = document.querySelector("#myCard").childNodes[3];
  const right = document.querySelector("#myCard").childNodes[5];

  //Generates and returns random number and MAX based on the array provided
  function generateRandom(arrLength) {
    let random = Math.floor(Math.random() * arrLength);
    return random;
  }

  //Render changes on DOM
  function renderCardGenerated(randomCardValue, randomSuit, randomSuitIcon) {
    left.innerText = randomSuitIcon;
    left.classList.add(randomSuit);

    right.innerText = randomSuitIcon;
    right.classList.add(randomSuit);

    number.innerText = randomCardValue;
    number.classList.add(randomSuit);
  }

  //Determines card value, suit text and suit icon in a values array
  function determineValues() {
    let cardValues = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    let suits = ["spade", "club", "heart", "diamond"];

    let suitIcons = {
      spade: "♠",
      club: "♣",
      heart: "♥",
      diamond: "♦"
    };

    let randomCardValue = cardValues[generateRandom(cardValues.length)];
    let randomSuit = suits[generateRandom(suits.length)];
    let randomSuitIcon = suitIcons[randomSuit];

    console.log(randomCardValue);
    console.log(randomSuit);
    console.log(randomSuitIcon);

    renderCardGenerated(randomCardValue, randomSuit, randomSuitIcon);
  }

  determineValues();
};
