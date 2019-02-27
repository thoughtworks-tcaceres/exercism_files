export class Anagram{
    constructor(word){
        this.word = word;
    }

    matches(toMatchList){
        var mainWord = this.word;
        mainWord = mainWord.toLowerCase().split("").sort();
        var matchedWords = new Array();
        var verifier;
        
        toMatchList.forEach(word => {
            verifier = true;
            var currWord = word.toLowerCase().split("").sort();
            if(mainWord.length === currWord.length){
                for(let i = 0; i < mainWord.length; i++){
                    if(mainWord[i] !== currWord[i]){
                        verifier = false;
                    }
                }
            }
            else if(mainWord.length !== currWord.length){
                verifier = false;
            }
            if(word.toLowerCase() === this.word.toLowerCase()){
                verifier = false;
            }
            if(verifier === true){
                matchedWords.push(word);
            }
        });
        return matchedWords;
    }
}