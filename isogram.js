export {isIsogram};

function isIsogram(input){
    if(input === undefined || input.length === 0){
        return true;
    }

    //split input word into an array and remove any non
    //character symbols
    input = input.replace(/[^a-zA-Z]/g, "").toLowerCase().split("");

    //go through input array and create object of the individual elements
    //while increasing the count by 1 for each occurence
    var counter = {};
    for(let i in input){
        if(counter.hasOwnProperty(input[i])){
            counter[input[i]]++;
        } else {
            counter[input[i]] = 1;
        }
    }

    //if count > 1 then it is not an isogram
    for(let i in counter){
        if(counter[i] > 1){
            return false;
        }
    }
    return true;
}