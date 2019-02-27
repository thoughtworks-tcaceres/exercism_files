export const toRoman = (value) => {
    var decimal =   [1000,  900,    500,    400,    100,    90,     50,     40,     10,     9,      5,      4,      1];
    var roman =     ["M",   "CM",   "D",    "CD",   "C",    "XC",   "L",    "XL",   "X",    "IX",   "V",    "IV",   "I"];
    var result ="";
    var i;

    for(i in roman){
        while(value >= decimal[i]){
            result+=roman[i];
            value-=decimal[i];
            console.log(roman[i]);
            console.log(i);
            console.log("roman["+i+"]");
        }
    }
    return result;
}