const letterConstructor = require("./letter.js");

function Word(word) {
    // An array of `new` Letter objects representing the letters of the underlying word
    this.letters = [];
    this.word = word;
    // function that returns a string of the word
    this.wordString = function () {
        for (var i = 0; i < this.word.length; i++) {
            this.letters.push(new Letter(this.word[i]));
        };
        // create variable to store the hangman word. (Printed word !=== a religious text)
        var printedWord = "";
        for (var j = 0; j < this.letters.length; j++) {
            // call first letter.js function
            printedWord = this.letters[j].display();
        };
        return printedWord;
    };
    this.guessCheck = function (guess) {
        // call second letter.js function
        var guessCheck = new Letter(guess);
        guessCheck.correctGuess(guess);
    };

};