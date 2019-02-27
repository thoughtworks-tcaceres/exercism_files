export {transform};

function transform(old){
    var mapping = Object.entries(old);
    var newFormat = {};

    for(let i = 0; i < mapping.length; i++){
        for(let j = 0; j < mapping[i].length; j++){
            for(let k = 0; k < mapping[i][j].length; k++){
                if(j != 0){
                    newFormat[mapping[i][j][k].toLowerCase()] = Number(mapping[i][0]);
                }
            }
        }
    }
    return newFormat;
}