
//create the puzzles. randomly selects one at the start. //
var puzzles = ["javascript", "wheel", "colorado", "baseball"];

// stores the current puzzle //
var puzzle = "";

// stores the answers //
var answers = [];

//Wheel Amounts and Prize return //
// -1 is for lose turn and 0 is for bankrupt // 

var wheelValues = [-1, 800, 350, 450, 700, 300, 600, 5000, 300, 600,
				300, 500, 800, 550, 400, 300, 900, 500, 300, 900, 0, 600, 400, 300];

// Other variables //
var vowels = ['A', 'E', 'I', 'O', 'U'];
var currentPlayer = 0;
var gameScore = [0,0];
var roundScore = [0,0];
var round = 1;
var buyVowel = false;

// Get elements from html //

var puzzleBoard = document.getElementsByClassName[puzzleBoard];
var puzzleRows = puzzleBoard.length;
var player1 = document.getElementsByClassName('player1');
var player2 = document.getElementsByClassName('player2');
var player1Score = document.getElementsByClassName('player1GameMoney');
var player2Score = document.getElementsByClassName('player2GameMoney');
var player1Bank = document.getElementsByClassName('player1TotalMoney');
var player2Bank = document.getElementsByClassName('player2TotalMoney');
var playerScore = { round: [player1Score, player2Score], game: [player1Bank, player2Bank]};	



function init() {
	// Selects a random word from puzzles //
	puzzle = puzzles[Math.floor(Math.random() * puzzles.length)]; 

	// Creates the answer array //
	answers = [];
	for (var i = 0; i < puzzle.length; i++) {
	answers[i] = "_";
}

	document.getElementById("answer").innerHTML = answers.join(" ");
	document.getElementById("message").innerHTML = "Type a letter, then press guess.";
}

init();

function guessOne() {
	// Get a guess from the player //
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
	// warning if more than one letter is entered //
	if (guess.length !== 1) {
		showThisMessage = "Please enter only a single letter";
	} else {
		// Update the game with the guess //
		var i=0;  // This places an index into the game //
		for (var i = 0; i < puzzle.length; i++) {
			if (guessedLetters[i] === guess) {
				answers[i] = guess;
				showThisMessage = "YES! + 'guess' + is in the answer";
			}
		}
		var remainingLetters = 0;
		// Recount the remaining letters //
		for (i = 0; i < puzzle.length; i++) {
			if (answers[i] === '_') {
				remainingLetters += 1;
			}
		}
		if (remainingLetters == 0) {
			showThisMessage = "YES! You solved the puzzle!";
		}
		if (showThisMessage === "") {
			showThisMessage = "Sorry, no + 'guess' ";
		}

		document.getElementById("answer").innerHTML = answers.join(" ");

		document.getElementById("guess").innerHTML = showThisMessage;

	}
} 

//creates function to return random amount

function spinAmount () {
	 return wheelValues[Math.floor((Math.random()*wheelValues.length))];
}

// Spin Wheel //

var spinWheel = document.getElementsByClassName('spin')[0]



//}

// Start New Game //

//newGame();
//function newGame() {
	//emptyBoard();  //Empty Puzzle Board //
	//setPuzzle();

// 

 //for(var i = 0; i < gameScore.length; i++) {

 //}


}














// Player turn control //
















