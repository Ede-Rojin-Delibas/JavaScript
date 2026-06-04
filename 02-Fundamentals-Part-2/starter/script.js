'use strict';

const cutPieces = function (fruit){
    return fruit * 4;
};

const fruitProcessor = function(apples, oranges){
    // console.log(apples, oranges);
    const applePieces=cutPieces(apples);
    const orangePieces=cutPieces(oranges);
    const juice=`Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    return juice;
}

const appleJuice=fruitProcessor(5,0);
// console.log(fruitProcessor(2,3));

const appleOrangeJuice=fruitProcessor(5,5);
// console.log(appleOrangeJuice);

const calAge1= function (birthYear) {
    return 2037 - birthYear;
}
//Arrow Functions
const age1 = birthYear => 2026-birthYear;

const age3 = age1(2002);
// console.log(age3);

const yearsUntilRetirement= (birthYear, firstName) => {
    const age= calAge1(birthYear);
    const retirement = 65 - age;
    if (retirement>0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired 👌`);
         return -1;
    }
   
}
console.log(yearsUntilRetirement(1960, 'Canan'));


