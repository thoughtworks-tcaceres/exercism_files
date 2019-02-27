export class DiffieHellman{
    constructor(p, g){
        if(p <= 0 || g <= 0)
            throw new Error();
        if(!(isPrimeNumber(p)) || !(isPrimeNumber(g)))
            throw new Error();      
        this.p = p;
        this.g = g;            
    }
    
    getPublicKeyFromPrivateKey(privKey){
        if(privKey <= 1 || privKey >= this.p)
            throw new Error();
        return this.g ** privKey % this.p;                        
    }

    getSharedSecret(privKey, pubKey){
        return pubKey ** privKey %  this.p;                
    }
}

function isPrimeNumber(num){
    if(num < 2)
        return false;

    for(let i = 2; i < num; i++){
        if(num%i === 0)
            return false;        
    }
        return true;
}