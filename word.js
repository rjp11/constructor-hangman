const Letter = require("./letter.js");

function Word(hangman) {
    // An array of `new` Letter objects representing the letters of the underlying word
    this.letters = [],

    // stores the hangman word as a string
    this.hangmanWord = hangman;

    // function to add the letter objects to this.letter array
    this.word = function (hangman) {
        for (var i = 0; i < this.hangmanWord.length; i++) {
            this.letters.push(new Letter(this.hangmanWord[i]));
        };
    },

    // function that returns a string of the word
    this.toString = function () {
        
        // create variable to store the hangman word. (Printed word !== a religious text)
        var printedWord = "";
        
        for (var j = 0; j < this.letters.length; j++) {
            // call first letter.js function
            // displays blanks or underlying letter
            printedWord += this.letters[j].display();
        };

        // displays the current status of the word...
        // (either correctly guessed letters or blanks)
        console.log(printedWord);
    },
    
    // CHECKING IS BROKEN
    // WHEN A CORRECT LETTER IS GUESSED, INDEX.JS SAYS IT'S NOT IN TH WORD
    this.guessCheck = function (guess) {
        
        // stores a new Letter object based on the user's guess
        var test = new Letter(guess);
        
        // call second letter.js function: check
        // to check user's guess against letters in the word 
        test.check(guess);
    }
};

module.exports = Word;