export {classify};

function classify(num){
    if(num <= 0){
        throw new Error("Classification is only possible for natural numbers.");
    }

    var factors = [];
    var sum = 0;

    for(let i = 1; i < num ; i++){
        if(num % i === 0){
            factors.push(i);
        }
    }

    for(let j in factors){
        sum+=factors[j];
    }
    
    if(sum === num){
        return "perfect";
    } else if (sum > num){
        return "abundant";
    } else if (sum < num){
        return "deficient";
    }
}