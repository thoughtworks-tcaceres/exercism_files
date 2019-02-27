export {compute};

function compute(input1,input2){

    if(input1.length !== input2.length){
        throw new Error('left and right strands must be of equal length');
    }

    var count = 0;
    for(let i = 0; i < input1.length; i++){
        if(input1[i]!=input2[i]){
            count++;
        }
    }

    return count;
}