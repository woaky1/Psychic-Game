var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var tries = 0;
var mysteryLetter;
var guessedLetters = [];

document.onkeyup = function(event) {
    // We record the users choice as a variable.
    var userGuessInput = event.key;

    // Computer chooses a letter.
    if (tries === 0) {
        mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(mysteryLetter);
        }

    userGuess = userGuessInput.toLowerCase();
    console.log("User guess is " + userGuess);
        
    // Check if the letters match.
    if (letters.includes(userGuess)) {

        if (userGuess === mysteryLetter) {
            wins++;
            tries = 0;
            guessedLetters = []; 
        } else {
            tries++;
            guessedLetters.push(userGuess);
        };
        if (tries === 9) {
            tries = 0;
            losses++;
            guessedLetters = []; 
        }
    }

    console.log("comp choice: "+ mysteryLetter);
    console.log("Number of wins: " + wins);
    console.log("Number of tries: " + tries);
    console.log("Number of losses " + losses);
}