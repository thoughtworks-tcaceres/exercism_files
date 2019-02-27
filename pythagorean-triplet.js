class Triplet{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    sum(){
        return this.a + this.b + this.c;
    }
    
    product(){
        return this.a * this.b * this.c;
    }
    
    isPythagorean(){
        return this.a**2 + this.b**2 === this.c**2;
    }
    
    static where({minFactor = 1, maxFactor, sum = null}){
        const triplets = [];
        for (let a = minFactor; a <= maxFactor; a++){
            for (let b = minFactor; b <= maxFactor; b++){
                for(let c = minFactor; c <= maxFactor; c++){
                    const triplet = new Triplet(a, b, c);
                    if(triplet.isPythagorean() && !triplets.map(v => v.product()).includes(triplet.product()) && (!sum || triplet.sum() === sum))
                        triplets.push(triplet);
                }
            }
        }
        return triplets;
    }
}

module.exports = {Triplet};