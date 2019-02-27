export class Squares{
    //constructor
    constructor(num){
        this.num = num;

        var sum1 = 0;
        var sum2 = 0;

        for(let i = 1; i <= num; i++){
            sum1 = sum1 + i;
            sum2 = sum2 + Math.pow(i,2);
        }
        this.squareOfSum = Math.pow(sum1, 2);
        this.sumOfSquares = sum2;
        this.difference = this.squareOfSum - this.sumOfSquares;
    }
}
