export const encode = (code) => {
    var message = "";
    var count = 1;
    for(let i=0; i<code.length; i++){
        if(code[i] === code[i+1]){
            count=count + 1;
        }
        else {
            if(count===1){
                message=message + code[i];
                count = 1;
            } else{
                message=message + count;
                message=message + code[i];
                count = 1;
            }
        }
    }
    return message;
}

export const decode = (code) => {
    var message = code.replace(/(\d+)(\w|\s)/g, (_, digit, char) => {
        return char.repeat(digit);
    });
    return message;
}
