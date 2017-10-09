 //console.log("Up and running!");
 /*
 var cardOne = "queen";
 var cardTwo = "queen";
 var cardThree = "king";
 var cardFour = "king";
 console.log("User flipped " + cardOne);
 console.log("User flipped " + cardThree);
 */
 var cards = [
 	{
 		rank: "queen",
 		suit: "hearts",
 		cardImage: "images/queen-of-hearts.png"
 	},
 	{
 		rank: "queen",
 		suit: "diamonds",
 		cardImage: "images/queen-of-diamonds.png"
 	},
 	{
 		rank: "king",
 		suit: "hearts",
 		cardImage: "images/king-of-hearts.png"
 	},
 	{
 		rank: "king",
 		suit: "diamonds",
 		cardImage: "images/king-of-diamonds.png"
 	}
 ];
 var cardsInPlay = [];
 var checkForMatch = function (){
 	if (cardsInPlay[0] === cardsInPlay[1]) {
 			alert("You found a match!");
 		} else {
 			alert("Sorry, try again");
 	}
 }
 var flipCard = function () {
 	this.getAttribute('data-id') = cardId;
 	console.log("User flipped " + cards[cardId].rank);
 	console.log(cards[cardId].cardImage);
 	console.log(cards[cardId].suit);
 	cardsInPlay.push(cards[cardId].rank);
 	this.setAttribute(cards[cardId].cardImage);
 	if (cardsInPlay.length === 2) {
 		checkForMatch();
 	}
 }
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("images/back.png");
		cardElement.className = 'data-id' + i;
		cardElement.addEventListener('click', flipCard);
		document.getElementsByTagName('game-board')[0].appendChild(cardElement);
	}
}

 createBoard();


