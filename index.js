const wordConstructor = require("./word.js");
const inquirer = require("inquirer");

var allWords = ["kerfuffle",
    "hullaballoo",
    "cacophony",
    "ragamuffin",
    "whippersnapper"
];

// randomly select word from array of all the words
var word = allWords[Math.floor(Math.random() * allWords.length)];