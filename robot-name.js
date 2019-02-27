var previousNames = [];

export class Robot{
    constructor(){
        this._name = this.generateName();
    }

    get name(){
        return this._name;
    }

    set name(n){
        throw "error";
    }
    
    generateName(){
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        //robot name : 2 uppercase letter + 3 digits
        //26 characters in the alphabet (convert to upper case)
        const unit = 
            alphabet[Math.floor(Math.random() * 26)] +
            alphabet[Math.floor(Math.random() * 26)] +
            Math.floor(Math.random() * 10) +
            Math.floor(Math.random() * 10) + 
            Math.floor(Math.random() * 10);
        return unit;
    }

    reset(){
        const newName = this.generateName();
        if(previousNames.indexOf(newName)<0){
            previousNames.push(newName);
            return this._name = newName;
        }
        else
            return this.reset();
    }
}