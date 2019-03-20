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

// Create Horizontal and Verticle Coulumn
function createGrid(h, v) {
  var arr = [];
  for (var i = 0; i < h * v / 2; i++) {
    arr.push(i);
    arr.push(i);
  }
  // Shuffle Array Index number
  var shuffle = [];
  while (arr.length > 0) {
    var rand = Math.floor(Math.random() * (arr.length));
    shuffle.push(arr[rand]);
    arr.splice(rand, 1);
  }
  for (var x = 0; x < h; x++) {
    for (var y = 0; y < v; y++) {
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

// Click Card function and Compare Card
function clickCard(e) {
  var card = e.target;
  card.src = "images/" + card.num + ".png";

  if(firstCard === 0) //first card is not clicked
  {
    firstCard = card;
  } else if (secondCard === 0) //first card clicked but second card not clicke
  {
    secondCard = card;
    //Compare Card
    if(firstCard.num == secondCard.num) //If card matches
    {
      firstCard.style.position = 'block';
      secondCard.style.position = 'block';
    } // if card not matches
    else {
      firstCard.src = "images/bg.png";
      secondCard.src = "images/bg.png";
    }
    firstCard = 0;
    secondCard = 0;
  }
}

//Start button
newGame.addEventListener("click", startAgain);
function startAgain() {
  window.location.reload();
}
//Select 4 pairs
pairs4.addEventListener("click", function() {
  createGrid(4, 2);
});
//Select 6 pairs
pairs6.addEventListener("click", function() {
  createGrid(4, 3);
});
//Select 8 pairs
pairs8.addEventListener("click", function() {
  createGrid(4, 4);
});
