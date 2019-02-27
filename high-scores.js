export class HighScores{
    constructor(input){
        this.input = input;
        this.dupInput = input;

        //all scores
        this.scores = input;

        //most recent score added
        this.latest = this.input[this.input.length-1];

        //highest score
        this.highest = Math.max.apply(null, this.input);

        //top 3 scores (this.top)
        var sortedInput = this.dupInput;
        sortedInput = sortedInput.sort((a,b) => {return b-a});
        var count = 0;
        var bestScores = [];
        for(let i = 0; i < sortedInput.length && count < 3; i++, count++){
           bestScores.push(sortedInput[i]);
        }
        this.top = bestScores;

        //report (this.report)
        // option 1 : "Your latest score was 70. That's 30 short of your personal best!"
        // option 2 : "Your latest score was 70. That's your personal best!"
        if(this.latest === this.highest){
            this.report = "Your latest score was " + this.latest + ". That's your personal best!";
        } else {
            this.report = "Your latest score was " + this.latest + ". That's " + (this.highest - this.latest) + " short of your personal best!";
        }
    }
}