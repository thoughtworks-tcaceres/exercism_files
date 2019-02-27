export class Triangle{
    constructor(height){
        this.height = height;
        var rows = new Array();
        
        for(let i = 0; i < height; i++){
            rows[i] = new Array();
            for(let j = 0; j < i+1; j++){
                if(j === 0 || j === i)
                    rows[i].push(1);
                else
                    rows[i].push(rows[i-1][j-1]+rows[i-1][j]);
            }
        }

        this.rows = rows;
        this.lastRow = rows[rows.length-1];
    }
}