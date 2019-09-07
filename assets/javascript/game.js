// Establishing our variables.

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var mysteryLetter;
var guessedLetters = [];

// We're linking parts of the html to variables here so we can diplay outcomes from the javascript on the page.
var guessedLettersText = document.getElementById("letters-guessed");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");

// This is what initiates the events of the game.
document.onkeyup = function(event) {
    // We record the users choice as a variable.
    var userGuessInput = event.key;
    // Let's force the guess to be lowercase to match the letters in our earlier array.
    var userGuess = userGuessInput.toLowerCase();
    // console.log(userGuess);

    // Computer chooses a letter.
    if (guessesLeft === 9) {
        mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
        }
    
    // Check if the letters match.
    if (letters.includes(userGuess)) {

        if (userGuess === mysteryLetter) {
            wins++;
            guessesLeft = 9;
            guessedLetters = []; 
        } else {
            guessesLeft--;
            guessedLetters.push(" " + userGuess);
        };
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            guessedLetters = []; 
        }
    }

    // console.log("comp choice: "+ mysteryLetter);
    // console.log("Number of wins: " + wins);
    // console.log("Number of guesses: " + guessesLeft);
    // console.log("Number of losses " + losses);

    // Putting the latest results of the game on the page.
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    lettersGuessedText.textContent = "Your guesses so far: " + guessedLetters;
}