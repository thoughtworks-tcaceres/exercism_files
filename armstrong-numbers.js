export const validate = (num) => {
//function validate(num){
    var sum = 0;
    var numString = num.toString();

    for(let i=0; i<numString.length; i++){
        let currNum = Number(numString.slice(i,i+1));
        sum += Math.pow(currNum, numString.length);
    }

    if(sum == num){
        return true;
    }else{
        return false;
    }
}