class Prime{
}

Prime.prototype.nth = function(nthPrime){
    if(nthPrime === 0)
        throw new Error("Prime is not possible");
    
    var count = 0;
    var currNum = 2;
    while(count < nthPrime){
        if(isPrime(currNum))
            count ++;
        if(count === nthPrime)
            return currNum;
        currNum +=1;       
    }
    return currNum;
}

function isPrime(num){
    if(num < 2)
        return false;
    else if(num === 2)
        return true;
    else if(num % 2 === 0)
        return false;
    for(let i = 3; i < num; i++){
        if(num % i === 0)
            return false;
    }
    return true;
}


module.exports = {Prime};