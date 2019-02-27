export {bracketPush};

function bracketPush(input){
    if (input === "")
        return true;
        
    var input2 = input.replace(/\{\}|\[\]|\(\)/g,"");
    if(input === input2)
        return false;
    else
        return bracketPush(input2);
}