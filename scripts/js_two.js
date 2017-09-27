var puzzles = ["javascript", "wheel", "colorado", "baseball"];

var puzzle = "";

var answers = [];

function init() {
	puzzle = puzzles[Math.floor(Math.random() * puzzles.length)]; 

	answers = [];
	for (var i = 0; i < puzzle.length; i++) {
	answers[i] = "_";
}

	document.getElementById("answer").innerHTML = answers.join(" ");
	document.getElementById("message").innerHTML = "Type a letter, then press guess.";
}

init();

function guessOne() {
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
	if (guess.length !== 1) {
		showThisMessage = "Please enter only a single letter";
	} else {
		var i=0;
		for (var i = 0; i < puzzle.length; i++) {
			if (puzzle[i] === guess) {
				answers[i] = guess;
				showThisMessage = "YES! + 'guess' + is in the answer";
			}
		}
		var remainingLetters = 0;
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

function quit() {
	document.getElementById("message").innerHTML = "The word was" + puzzle;
		for (var j = 0; j < puzzle.length; j++) {
			answers[j] = puzzle[j];
		}
		document.getElementById("answer").innerHTML = answers.join(" ");

}
}
