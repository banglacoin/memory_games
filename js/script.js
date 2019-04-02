//Variable DOM Element
var gameDiv = document.getElementById("memoryGame");
var console = document.getElementById("console");

//Variable
var cardSize = 100;
var cardSpacing = 10;
var firstCard = 0;
var secondCard = 0;
var sortedCards = [];
var shuffle = [];
var gameFieldWidth;
var gameFieldHeight;

createGrid(4, 4); //Home Screen With all card
// Create Horizontal and Verticle Coulumn
function createGrid(gameFieldWidth, gameFieldHeight) {
  for (var i = 0; i < gameFieldWidth * gameFieldHeight / 2; i++) {
    sortedCards.push(i);
    sortedCards.push(i);
  }

  // Shuffle Array Index number
  while (sortedCards.length > 0) {
    var rand = Math.floor(Math.random() * (sortedCards.length));
    shuffle.push(sortedCards[rand]);
    sortedCards.splice(rand, 1);
  }

  // Create Game Field With X and Y axis
  for (var x = 0; x < gameFieldWidth; x++) {
    for (var y = 0; y < gameFieldHeight; y++) {
      createCard(shuffle.pop(), x, y);
    }
  }
}

// Create Card function
function createCard(cardNum, posX, posY) {
  var card = document.createElement("img");
  card.num = cardNum;
  card.src = "images/bg.png";
  card.style.border = "1px solid black";
  card.style.position = "absolute";
  card.style.left = (posX * (cardSize + cardSpacing) + cardSpacing) + "px";
  card.style.top = (posY * (cardSize + cardSpacing) + cardSpacing) + "px";
  card.onclick = clickCard;
  gameDiv.appendChild(card);
}

// Click Card function
function clickCard(e) {
  // e(events) will remember which card was clicked
  var card = e.target;
  if (firstCard === 0) {
    //first card is not clicked
    card.src = "images/" + card.num + ".png";
    firstCard = card;
  } else if (firstCard === card){
    firstCard.src = "images/bg.png";
    firstCard = 0;
  } else if (secondCard === 0) {
    //first card clicked but second card is not clicked
    card.src = "images/" + card.num + ".png";
    secondCard = card;
    //If second card was click and not same as first card
    //then second card wait one second and then both card
    //flip black.
    setTimeout(checkCards, 1000);
  }
}

function checkCards() {
  //Compare Card
  if (firstCard.num === secondCard.num) {
    //If card matches
    firstCard.style.position = 'block';
    secondCard.style.position = 'block';
  } else {
    // if card not matches
    firstCard.src = "images/bg.png";
    secondCard.src = "images/bg.png";
  }
  firstCard = 0;
  secondCard = 0;
}

//Add Event Listener on Button
console.addEventListener('click', buttonInAction, false);

function buttonInAction(e) {
  if(e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
    if(clickedItem === 'startAgain' || clickedItem === 'pairs8') {
      gameDiv.innerHTML = " ";
      createGrid(4,4);
    } else if (clickedItem === 'pairs6'){
      gameDiv.innerHTML = " ";
      createGrid(4,3);
    } else {
      gameDiv.innerHTML = " ";
      createGrid(4,2);
    }
  }
  e.stopPropagation();
}
