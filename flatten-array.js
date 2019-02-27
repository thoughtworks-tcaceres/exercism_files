class Flattener{}
    Flattener.prototype.flatten = function(inputArr){
        return (inputArr || []).reduce((acc, curr) => 
            acc.concat(typeof(curr) == "number" ? curr : this.flatten(curr)), []);
    }

module.exports = {
    Flattener
};