export class PhoneNumber{
    constructor(rawNum){
        this.rawNum = rawNum;        
    }

    number(){
        var num = this.rawNum;
        
        //only keep digits
        num = num.replace(/\D/g,"");

        //remove first character if 11 length and starts with 1
        if(num.length == 11 && num[0] == "1"){
            num = num.replace(/^[1]/g,"");
        }

        //case checking
        //correct number of digits + correct digits
        if(num.length !== 10 || num === undefined) {
            //throw new Error();
            return null;
        }else if(num[0] < 2 || num[3] < 2){
            //throw new Error();
            return null;
        }

        return num;
    }
}