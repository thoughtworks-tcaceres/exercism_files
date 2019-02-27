export class Words{
    constructor(){}
    count(input){
        var cleanInput = input;
        cleanInput = cleanInput.toLowerCase();
        cleanInput = cleanInput.replace(/\n|\t/g," ");
        cleanInput = cleanInput.replace(/[ ]{1,}/g," ");
        cleanInput = cleanInput.replace(/(^\s*)|(\s*$)/g,"");
        cleanInput = cleanInput.split(" ");
        var counts = {};
        
        for(let i = 0; i < cleanInput.length; i++){
            if(counts.hasOwnProperty(cleanInput[i])){
                counts[cleanInput[i]] += 1;
            } else {
                counts[cleanInput[i]] = 1;
            }
        }           
    return counts;
    }
}