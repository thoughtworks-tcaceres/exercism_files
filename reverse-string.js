export const reverseString = (text) => {
    var reverseText ="";
    for(let i=text.length; i > 0; i--){
        reverseText+=text[i-1];
    }
    return reverseText;
}