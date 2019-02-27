class WordProblem{
    constructor(question){
        this.question = cleanup(question);
    }

    answer(){
        var sum = 0;
        if(this.question.length < 2 || this.question === undefined)
            throw new ArgumentError();
        
        for(let i = 0; i < this.question.length; i++){
            if(i===0){
                if(this.question[i+1]==="+")
                    sum += Number(this.question[i]) + Number(this.question[i+2]);
                else if(this.question[i+1]==="-")
                    sum += Number(this.question[i]) - Number(this.question[i+2]);
                else if(this.question[i+1]==="*")
                    sum += Number(this.question[i]) * Number(this.question[i+2]);
                else if(this.question[i+1]==="/")
                    sum += Number(this.question[i]) / Number(this.question[i+2]);
                i+=2;
            }
            else{
                if(this.question[i]==="+")
                    sum += Number(this.question[i+1]);
                else if(this.question[i]==="-")
                    sum -= Number(this.question[i+1]);
                else if(this.question[i]==="*")
                    sum *= Number(this.question[i+1]);
                else if(this.question[i]==="/")
                    sum /= Number(this.question[i+1]);
                i+=2;
            }
        }
    return sum;
    }
}

function cleanup(question){
    var cleanQuestion = question;
    cleanQuestion = cleanQuestion.replace(/multiplied by/gi, "*")
                                    .replace(/minus/gi, "-")
                                    .replace(/divided by/gi, "/")
                                    .replace(/plus/gi, "+")
                                    .replace(/[a-zA-z\?]/g, "")
                                    //.replace(/\s+/g,"")
                                    //.replace(/\-\-|\+\+/g, "+")
                                    //.replace(/\+\-|\-\+/g, "-")
                                    .replace(/\*/g, " * ")
                                    .replace(/\+\s+/g, " + ")
                                    .replace(/\//g, " / ")
                                    .replace(/\-\s+/g, " - ")
                                    .trim().split(" ");
    cleanQuestion = cleanQuestion.filter(Boolean);
    console.log(cleanQuestion);
    return cleanQuestion;
}

class ArgumentError extends Error {

}

module.exports = {
    WordProblem,
    ArgumentError
}