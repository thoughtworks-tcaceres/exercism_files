export {parse};

function parse(input){
    var matched = input.match(/[A-Z]+[a-z]*|[a-z]+/g);
    let result = "";
    matched.forEach(word => {
        result = result + word[0].toUpperCase();
    });
    return result;
}