//Variable DOM Element
var gameDiv = document.getElementById("memoryGame");
var newGame = document.getElementById("startAgain");
var pairs4 = document.getElementById("pairs4");
var pairs6 = document.getElementById("pairs6");
var pairs8 = document.getElementById("pairs8");

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
    firstCard = card;
    card.src = "images/" + card.num + ".png";
  } else if (secondCard === 0) {
    //first card clicked but second card is not clicked
    card.src = "images/" + card.num + ".png";
    secondCard = card;
    setTimeout(checkCards, 1000); //Delay One Second
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

//Start button
newGame.addEventListener("click", startAgain);
//Start Again Function
function startAgain() {
  gameDiv.innerHTML = " ";
  createGrid(4, 4);
}

//Select 4 pairs
pairs4.addEventListener("click", pairsOfFour);

function pairsOfFour() {
  gameDiv.innerHTML = " ";
  gameDiv.pairs4.innerHTML = createGrid(4, 2);
}

//Select 6 pairs
pairs6.addEventListener("click", pairsOfSix);

function pairsOfSix() {
  gameDiv.innerHTML = " ";
  gameDiv.pairs6.innerHTML = createGrid(4, 3);
}

//Select 8 pairs
pairs8.addEventListener("click", pairsOfEight);

function pairsOfEight() {
  gameDiv.innerHTML = " ";
  gameDiv.pairs8.innerHTML = createGrid(4, 4);
}
