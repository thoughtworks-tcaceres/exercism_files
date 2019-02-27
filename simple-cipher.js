const minCharOffset = 97; //start of the lower case 'a' in ascii
const alphabetLength = 26; //length of alphabet
const maxCharOffset = 122;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

class Cipher{
    constructor(key = null){
        if(key === null)
            this.key = keyCreator();
        else
            this.key = keyChecker(key);
    }

    encode(encodeString){
        encodeString = [...encodeString];
        return encodeString.map((letter, i) => {
            let charCode = ((letter.charCodeAt(0) + this.key.charCodeAt(i % this.key.length)) % minCharOffset) % alphabetLength + minCharOffset;
            return String.fromCharCode(charCode);
        }).join("");
    }
    
    decode(decodeString){
        decodeString = [...decodeString];
        return decodeString.map((letter, i) => {
            let charCode = (alphabetLength + (letter.charCodeAt(0) - this.key.charCodeAt(i % this.key.length))) % alphabetLength + minCharOffset;
            return String.fromCharCode(charCode);
        }).join("");
    }
}

function keyChecker(key){
    if(key.length === 0)
        throw new Error("Bad key");
    
    const test = key.match(/[a-z]/g);
    if(test === null ||test.length != key.length)
        throw new Error("Bad key");
    
    return key;
}

function keyCreator(){
    var key = "";
    for(let i = 0; i < 100; i++){
        key += String.fromCharCode(minCharOffset + Math.floor(Math.random() * alphabetLength));
    }
    return key;  
}

module.exports = {Cipher};