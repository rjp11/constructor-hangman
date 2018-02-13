// constructs a letter object
var Letter = function(letter) {
    
    // instructions line 19
    this.letter = letter,
    
    // insturctions line 21
    this.letterGuessed = false,
    
    // instructions line 23
    this.display = function () {
        if (this.letterGuessed === false) {
            return "_";
        } else {
            return this.letter
        };
    },
    
    // instructions line 25
    this.check = function (guess) {
        if (guess === this.letter) {
            this.letterGuessed = true;
        };
    }
};

module.exports = Letter; 