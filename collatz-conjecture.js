export {steps};

function steps(num){
    if(num <= 0){
        throw new Error("Only positive numbers are allowed");
    }
    var count = 0;

    while(num > 1){
        //even
        if(num % 2 === 0){
            num = num/2;
        } else  { //odd
            num = num*3 + 1;
        }
        count++;
    }
    return count;
}
