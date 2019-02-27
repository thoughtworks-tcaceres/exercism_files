class ComplexNumber{
    constructor(real, imag){
        this.real = real;
        this.imag = imag;
        this.abs = Math.sqrt(this.real ** 2 + this.imag ** 2);
    }

    get conj(){
        return create(this.real, this.imag * -1);
    }

    get exp(){
        return create((Math.E ** this.real) * Math.cos(this.imag), (Math.E ** this.real) * Math.sin(this.imag));
    }

    div(compNum2){
        var real = (this.real * compNum2.real + this.imag * compNum2.imag) / (compNum2.real ** 2 + compNum2.imag ** 2);
        var imag = (this.imag * compNum2.real - this.real * compNum2.imag) / (compNum2.real ** 2 + compNum2.imag ** 2);
        return new ComplexNumber(real, imag);
    }

    mul(compNum2){
        var real = this.real * compNum2.real - this.imag * compNum2.imag;
        var imag = this.imag * compNum2.real + this.real * compNum2.imag;
        return new ComplexNumber(real, imag);
    }

    sub(compNum2){
        var real = this.real - compNum2.real;
        var imag = this.imag - compNum2.imag;
        return new ComplexNumber(real, imag);
    }

    add(compNum2){
        var real = this.real + compNum2.real;
        var imag = this.imag + compNum2.imag;
        return new ComplexNumber(real, imag);
    }
}

function create(real, imag){
    if(real === -0)
        real = 0;
    if(imag === -0)
        imag = 0;
    return new ComplexNumber(real, imag);
}

module.exports = {
    ComplexNumber
}