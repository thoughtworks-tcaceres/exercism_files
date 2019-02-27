export const translate = (pattern) => {
//function translate(pattern){
    var mapping = {
        AUG: "Methionine",
        UUU: "Phenylalanine",
        UUC: "Phenylalanine",
        UUA: "Leucine",
        UUG: "Leucine",
        UCU: "Serine",
        UCC: "Serine",
        UCA: "Serine",
        UCG: "Serine",
        UAU: "Tyrosine",
        UAC: "Tyrosine",
        UGU: "Cysteine",
        UGC: "Cysteine",
        UGG: "Tryptophan",
        UAA: "STOP",
        UAG: "STOP",
        UGA: "STOP"
    };
    var sequenceArr = [];
    if(pattern === undefined || pattern.length < 3){
        return sequenceArr;
    }

    for(let i=0; i<pattern.length; i+=3){
        let codon = pattern.slice(i,i+3);
        let protein = mapping[codon];
        if(!(codon in mapping)){
            throw new Error("Invalid codon");
        }
        else if(protein === "STOP"){
            return sequenceArr;
        }
        sequenceArr.push(protein);
        
    }
    return sequenceArr;
}