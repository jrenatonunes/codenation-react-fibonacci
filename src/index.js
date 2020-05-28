'use strict'

const fibonacci = (limitValue = 350 ) => {
    let arrayFibonacci = [ 0, 1 ];

    let elementValue = 0;
    for ( let elementIndex = 2; elementValue <= limitValue ; elementIndex++) {
        elementValue =  arrayFibonacci[elementIndex -1] + 
                        arrayFibonacci[elementIndex - 2];
        arrayFibonacci.push(elementValue);
    }
    return arrayFibonacci;
}


const isFibonnaci = (valueToVerify) => fibonacci().includes(valueToVerify);

module.exports = {
    fibonacci,
    isFibonnaci
}