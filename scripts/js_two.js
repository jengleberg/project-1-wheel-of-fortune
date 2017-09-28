
// Selector Elements from HTML


var p1Name = document.getElementById("p1name");
var p2Name = document.getElementById("p2name");
var p1RoundScore = document.getElementById("p1score");
var p2RoundScore = document.getElementById("p2score");
var p1GameScore = document.getElementById("p1bank");
var p2GameScore = document.getElementById("p2bank");
var solvePuzzle = document.getElementById("solve");
var newGame = document.getElementById("newGame");


// Game Variables

var puzzles = ["javascript", "function", "general-assembly", "prototype", "binary", "psuedocode"];
var puzzle = "";
var answers = [];
var currentPlayer = 0;
var gameScore = 0;
var round = 1;

// Spin Results

spinValues = ['LoseTurn', '800', '350', '450', '700', '300', '600', '5000', '300', '600',
				'300', '500', '800', '550', '400', '300', '900', '500', '300', '900', 'Bankrupt', '600', '400', '300'];





// Function that pulls a random value from the spinValues array

SpinAmount = function () {
	 return spinValues[Math.floor((Math.random()*spinValues.length))];
};

spin.addEventListener('click', function() {
	alert(SpinAmount());
});

// Function that initializes the game by randomly choosing a puzzle from the puzzles array

function init() {
	puzzle = puzzles[Math.floor(Math.random() * puzzles.length)]; 

// Creates the blank lines for the letter guesses
	answers = [];
	for (var i = 0; i < puzzle.length; i++) {
	answers[i] = "_";
}

	document.getElementById("answer").innerHTML= answers.join(" ");
    document.getElementById("message").innerHTML= "Let's play";
}

var p1RoundScore = 0;
var p2RoundScore = 0;

init();


// function that allows player to guess the letter

function guessOne() {
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
	if (guess.length !== 1) {
		showThisMessage = "Please enter only a single letter";
	} else {
		var i = 0;
		for (var i = 0; i < puzzle.length; i++) {
			if (puzzle[i] === guess) {
				answers[i] = guess;
				showThisMessage= "YES! Vanna, show us " + guess + ".";
			} 
				
		}

		var remainingLetters = 0;
		for (i = 0; i < puzzle.length; i++) {
			if (answers[i] === '_') {
				remainingLetters += 1;
			}
		}
		if (remainingLetters == 0) {
			showThisMessage = "YES! Solved the Puzzle!";
		} 

		if (showThisMessage === "") {
			showThisMessage = "Sorry, no " + guess;
			nextPlayer();
		} 

		document.getElementById("answer").innerHTML = answers.join(" ");

		document.getElementById("guess").innerHTML = showThisMessage;
		}
		document.getElementById("message").innerHTML = showThisMessage;
	}

function currPlayerName() {
	playerNames = [p1Name.val(), p2Name.val()];
	return playerNames[currentPlayer];


}

function nextPlayer() {
  if(currentPlayer === 1) {
    currentPlayer = 0;
  } else {
    currentPlayer++;
  }
}

