const Word = require("./word.js");
const inquirer = require("inquirer");
// is Letter: npm package for input validation. Restricts inquirer input to a single letter. 
const isLetter = require("is-letter");

// ALL WORDS HAVE THE LETTER R (FOR TESTING ONLY)
// WILL ADD FULL WORD LIST AFTER COMPLETING
var allWords = ["kerfuffle",
    "ragamuffin",
    "whippersnapper"
];

// define global variables
var randomWord;
var hangman;
var guessesRemaining;
var guessedLetters = [];

function reset() {
    guessedLetters = [];
    guessesRemaining = 4;
    
    // randomly select word from array of all the words
    randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    
    // construct new Word object consisting of the letters in randomWord
    hangman = new Word(randomWord);
    
    // THE FOLLOWING CODE WAS FOR DEBUGGING PURPOSES
    // console.log(hangman.letters);
    // hangman.word();
    // console.log(hangman.letters);
    // console.log(hangman.hangmanWord);
    
    console.log(`----------------\nTry to guess a bizarre English word \n----------------\n`);
    promptGuess();
};

function promptGuess() {
    
    // prompts user to input a guess in the command line
    inquirer.prompt([{
        message: "Guess a letter!",
        name: "guess",
        type: "input",
        // inquirer validate will only allow letter input with isLetter
        validate: function (value) {
            if (isLetter(value)) {
                return true
            } else {
                return false
            };
        }
    }, ]).then(function (answers) {

        var guessInput = answers.guess;
        
        // run the word.js guessCheck function on the user's input
        hangman.guessCheck(guessInput);
        
        // storing the index of the guess letter to see if it's been guessed before
        var check = guessedLetters.indexOf(guessInput);
        
        // if the guess isn't in guessed letters array and guesses remaoin
        if (check === -1 && guessesRemaining >= 1) {
            guessedLetters.push(guessInput);
            guessesRemaining--;
            console.log(`----------------\nThe letter ${guessInput} is not in this word\n${guessesRemaining + 1} guesses left!`);
            hangman.toString();
            promptGuess();
        } 
        
        // letter has previously been guessed.
        else if (check !== -1 && guessesRemaining >= 1) {
            console.log(`----------------\nYou already guessed ${guessInput}\n${guessesRemaining + 1} guesses left!`);
            console.log(hangman + '');
            hangman.toString();
            promptGuess();
        } 
        
        // word has been guessed. play again?
        else if (guessesRemaining > 0) {
            console.log(`----------------\nYou win!`);
            console.log(hangman + '');
            hangman.toString();
            playAgain();
        } 
        
        // user loses. display word. play again?
        else {
            console.log(`The word was ${hangman.hangmanWord}. Try Again!`);
            playAgain();
        };
    });
};

// function to give the user the option to play again after completion of one game
function playAgain(){
    
    inquirer.prompt([{
        message: "Play again?",
        name: "playAgain",
        type: "confirm"

    }, ]).then(function (answer){
        
        if (answer.playAgain){
            // restarts game if yes
            reset();
        } else {
            // returns to terminal command line if no
            process.exit();
        }
    });
};

reset();
