function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.display = function () {
        if (this.guessed === false) {
            return "_";
        } else {
            return this.letter
        };
    };
    this.correctGuess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        };
    };
};

module.export = Letter;