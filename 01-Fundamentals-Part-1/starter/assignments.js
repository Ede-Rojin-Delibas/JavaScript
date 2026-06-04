let country="Turkey";
let continent="Europe";
let population=85.5;
/*console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun=true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun="YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year=2002;
console.log(typeof year);

let emptyValue=null;
console.log(emptyValue);
console.log(typeof emptyValue);

let isIsland=false;
let language;

const isIsland=false;
const continent="Europe";
console.log(typeof isIsland);
console.log(typeof language);

language="Turkish";

const now =2026;
const ageJonas = now -1991;

console.log(ageJonas);
console.log(ageJonas*2);

const firstN="Selena";
const lastName="Gomez";
console.log(firstN + ' '+ lastName);

let x= 10 + 5;
x+=10;

x*=3;

x++;
console.log(x);*/

const firstNam="Celine";
const job="singer";
const birthYear=1980;
const year=2026;

const celine="I'm " + firstNam + ', a ' + (year- birthYear) + ' years old ' + job + '!';
//console.log(celine);

const celineNew= `I am ${firstNam}, a ${year-birthYear} years old ${job}!`;
//console.log(celineNew);

//if-else
/*const age=15;
if(age>=18){
    console.log('Mike can have a driving license 🛻')
}else{
    const yearsLeft=18-age;
    console.log(`Mike is too young. Please wait another ${yearsLeft} years :(`);
}*/

//type conversion
const inputYear='1990';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear)+18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);
// console.log(String(23), 23);

//type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);

// const money=0;
// if (money){
//     console.log("Don't spend it all ;)");
// }else{
//     console.log('You should get a job!');
// }

/*const age1 = 19;
if (age1 == 18) console.log("Congrates you are an adult right now :)");

if (age1===18) console.log("Now you are a complete adult :D");

const favouriteNum=prompt("What's your favourite number");
console.log(favouriteNum);
console.log(typeof favouriteNum);

if(favouriteNum==2){
    console.log("2 is a good number for favourite, hah?")
}else if (favouriteNum==24){
    console.log("24 is also a good number")
}else{
    console.log("Number is not 24 or 2")
}
if(favoriteNum!==23) console.log("Why not 23?") */

const hasDriverLicense=true;
const hasGoodVision=true;

// console.log(hasDriverLicense && hasGoodVision);

// const isTired=true;
// if(hasDriverLicense && hasGoodVision || isTired){
//     console.log("Sarah is able to drive.");
// }else{
//     console.log("Someone else should drive...");
// }

//switch
/* const day='friday';
switch (day){
    case 'monday':
        console.log("Plan the whole week");
        break;
    case 'tuesday':
        console.log("Learning JavaScript");
        break;
    case 'wednesday':
        console.log("Learning Marketing");
        break;
    case 'thursday':
        console.log("Learning Sales");
        break;
    case 'friday':
        console.log("Self care day");
        break;
    case 'saturday':
        console.log("Sleep 😴")
        break;
    case 'sunday':
        console.log("Family timeee");
        break;

    default:
        console.log("Not a valid day");    
} */

//ternary operator/conditional operator
// const age2=23;
// const drink=(age2>=18) ? 'wine 🍷' : 'water 💧';
// console.log(drink);

const bill=275;
const tip=bill >=50 && bill<=300 ? bill*0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
alert("Hello World!");
const javascript='amazing';
if (javascript==='amazing') alert("Let's learn Javascript!");

//we can also do math
40+6+13%10;

// store results in variables
const totalHours=40+6+13%17;
totalHours;
