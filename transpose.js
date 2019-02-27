export {transpose};

function transpose(input){
    if(input === "" || input.length === 0 || input === undefined)
        return input;

    var lArr = 0;
    // number of strings in the Tmatrix array
    for(let i = 0; i < input.length; i ++){
        if(input[i].length > lArr)
            lArr = input[i].length;
    }
    //max number of chars in tMatrix
    var wArr = input.length;

    //set the dimensions of the matrix
    var tMatrix = new Array(lArr);

    //populate the matrix
    for(let i = 0; i < lArr; i++){
        var tempArr = "";
        for(let j = 0; j < wArr; j++){
            if(input[j].charAt(i))
                tempArr += input[j].charAt(i);
            else
                tempArr += " ";
            //tempArr = tempArr.trimRight();
            tMatrix[i] = tempArr;
        }
    }
    return tMatrix;
}