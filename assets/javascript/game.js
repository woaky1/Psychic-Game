var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var losses = 0;
var tries = 0;

console.log(mysteryLetter);

document.onkeyup = function(event) {
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