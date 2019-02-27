export class Series{
    constructor(input){
        this.input = input;
        this.digits = this.input.split("");
        for(let i = 0; i < this.digits.length; i++){
            this.digits[i] = +this.digits[i];
        }
    }
    slices(num){
        var counter = this.digits.length - num + 1;
        if(counter < 1){
            throw new Error("Slice size is too big.");
        }
        
        var multiArr = [];
        for(let i = 0; i < counter; i++){
            multiArr[i] = new Array();
            for(let j = 0; j < num; j++){
                multiArr[i].push(Number(this.digits[j+i]));
            }
        }
        return multiArr;
    }
}