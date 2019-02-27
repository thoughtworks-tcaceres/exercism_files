function primeFactors(num){    
    var factors = [];
    
    //even number (print out the 2s)
    while(num % 2 == 0){
        num = num / 2;
        factors.push(2);
    }

    //odd numbers that aren't prime number
    for(let i = 3; i <= Math.sqrt(num); i = i + 2){
        while(num % i == 0){
            num = num / i;
            factors.push(i);
        }
    }

    //prime number greater than 2
    if(num > 2)
        factors.push(num);

    return factors;    
}

module.exports  = {primeFactors};