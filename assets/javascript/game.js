var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var tries = 0;

document.onkeyup = function(event) {
    // Computer chooses a letter.
    var mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(mysteryLetter);
    
    // We record the users choice as a variable.
    var userGuessInput = event.key;
    userGuess = userGuessInput.toLowerCase();
    console.log("User guess is " + userGuess);
    
    if(letters.includes(userGuess)) {
        if(userGuess === mysteryLetter) {
            wins++;
        }
    }
    console.log(wins);
}