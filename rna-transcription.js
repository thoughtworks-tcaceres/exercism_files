export const toRna = (dna) => {
//function toRna(dna){
    var rna = "";

    // if(dna===undefined || dna === ""){
    //     return '';
    // }

        for(let i = 0; i < dna.length; i++){
            switch(dna[i]){
                case "G":
                    rna+="C";
                    break;
                case "C":
                    rna+="G";
                    break;
                case "T":
                    rna+="A";
                    break;
                case "A":
                    rna+="U";
                    break;
                default:
                    throw new Error("Invalid input DNA.");
            }
        }
        return rna;
}