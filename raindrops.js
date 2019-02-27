export {convert};

function convert(input){

    var message = "";

    if(input % 3 === 0){
        message+="Pling";
    }

    if(input % 5 === 0){
        message+="Plang";
    }

    if(input % 7 === 0){
        message+="Plong";
    }

    if(message===""){
        message+=input;
    }
    console.log(message);
    return message;
}