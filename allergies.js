const allergies = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

class Allergies{
    constructor(num){
        this.num = num;
        this.allergies = createList(this.num);       
    }

    list(){
        return this.allergies;
    }

    allergicTo(allergy){
        return this.allergies.includes(allergy);
    }
}

function createList(num){
    return allergies.filter((arr, i) => Math.pow(2,i) & num);
} 

module.exports = {
    Allergies
};