export class Triangle{
    constructor(l, w, h){
        this.l = l;
        this.w = w;
        this.h = h;
        this.sidesArr = [l, w, h];
    }
    
    kind(){
        var kind;
        var temp;
        for(let i = 0; i < this.sidesArr.length-1; i++){
            if(this.sidesArr[i]>this.sidesArr[i+1]){
                temp = this.sidesArr[i+1];
                this.sidesArr[i+1] = this.sidesArr[i];
                this.sidesArr[i] = temp;
            }
        }

        //error throwing
        if(!(this.l > 0 && this.w > 0 && this.h > 0)){
            throw new Error("all sides must be greater than 0");
        } else if(this.sidesArr[0] + this.sidesArr[1] < this.sidesArr[2]){
            throw new Error("sum of 2 sides must be >= length of 3rd side");
        }

        var sides = new Set();    
        sides.add(this.l);
        sides.add(this.w);
        sides.add(this.h);

            //determine type of triange
            if(sides.size === 3){
                return "scalene";
            } else if(sides.size === 2){
                return "isosceles";
            } else if(sides.size === 1){
                return "equilateral";
            }
    }  
}