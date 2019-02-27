export {isPangram};

function isPangram(input){
    if(input === undefined || input === ""){
        return false;
    }
    
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var lowerInput = input.toLowerCase();

    for(let i = 0; i < alphabet.length; i++){
        if(!(lowerInput.includes(alphabet[i]))){
            return false;
        }
    }
    return true;    
}