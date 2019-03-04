var gameDiv = document.getElementById("memoryGame");
var newGame = document.getElementById("newGame");
var pairs4 = document.getElementById("pairs4");
var pairs6 = document.getElementById("pairs6");
var pairs8 = document.getElementById("pairs8");

var cardSize = 100;
var cardSpacing = 10;

// Create Verticale and Horizontal Coulumn
function createGrid(h, v) {
  var arr = [];
  for(var i = 0; i<h*v/2; i++){
    arr.push(i);
    arr.push(i);
  }
  // Shuffle Array Index number
  var shuffle = [];
  while(arr.length > 0){
    var rand = Math.floor(Math.random()*arr.length);
    shuffle.push(arr[rand]);
    arr.splice(rand,1);
  }
  for (var x=0; x<h; x++) {
    for (var y=0; y<v; y++) {
      createCard(shuffle.pop(), x, y);
    }
  }
}
// Create Card
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
// Click Card
function clickCard(e){
  var card = e.target;
  card.src = "images/"+ card.num +".png";
}

//Start button
newGame.addEventListener("click",startAgain);
function startAgain(){
window.location.reload();
}
//Select 4 pairs
pairs4.addEventListener("click",function(){
  createGrid(4,2);
  
});
//Select 6 pairs
pairs6.addEventListener("click",function(){
  createGrid(4,3);
});
//Select 8 pairs
pairs8.addEventListener("click",function(){
  createGrid(4,4);
});
