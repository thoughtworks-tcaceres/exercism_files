export const convert = (inputArr, inputBase, outputBase) => {
//function convert(inputArr, inputBase, outputBase){
    //inputArr should be an array
    //inputBase should be a single number
    //outputBase should be a single number

    if(inputArr === undefined){
        throw new Error("Input has wrong format");
    }

    else if(isNaN(inputBase) || inputBase === undefined){
        throw new Error("Wrong input base");
    }

    else if(isNaN(outputBase) || outputBase === undefined){
        throw new Error("Wrong output base");
    }

    var sum = 0;

    //determine total value of number -> using the inputArr and inputBase
    for(let i = 0; i < inputArr.length; i++){
        sum += inputArr[i] * Math.pow(inputBase, inputArr.length-i-1);
        //console.log(sum);
    }

    var outputArr = []; //the array that will be returned with the base of outputBase
    var quotient = sum; //keep dividing remainder number by the output base

    do{
        var remainder = quotient % outputBase;
        //console.log("remainder:" + remainder);
        quotient=Math.floor(quotient / outputBase);
        //console.log("quotient:" + quotient);
        outputArr.unshift(remainder);
        //console.log(outputArr);
    } while(quotient !== 0);

    return outputArr;
}