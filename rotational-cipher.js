export class RotationalCipher{
    static rotate(input, value){
        var msg = "";
        value = value % 26;
        var capitalize;
        var newChar;
        //ASCII//
        // A : 65
        // Z : 90
        // a : 97
        // z : 122

        for(let i = 0; i < input.length; i++){
            capitalize = false;
            if(input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90){
                if(input[i].charCodeAt() + value > 90)
                    newChar = (input[i].charCodeAt() + value) - 90 + 64;
                else
                    newChar = input[i].charCodeAt() + value;
            }
            else if(input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122){
                if(input[i].charCodeAt() + value > 122)
                    newChar = (input[i].charCodeAt() + value) - 122 + 96;
                else
                    newChar = input[i].charCodeAt() + value;
            }
            else
                newChar = input[i].charCodeAt();

            msg += String.fromCharCode(newChar);
        }
        return msg;
    }
}