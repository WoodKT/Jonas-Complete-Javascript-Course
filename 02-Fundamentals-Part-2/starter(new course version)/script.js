/*
let js = 'amazing';
console.log(40+8+23);

console.log('Jonas');
console.log(23);

let firstname = 'Matilda';

console.log(firstname);
console.log(firstname);
console.log(firstname);

//Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

///////////////////////////////////
//Basic Operators
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas/10, 2 ** 3);
// 2 ** 3 means 2 to the power pf 3 = 2*2*2

const firstname = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstname + ' ' + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1
x--;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah)/2;
console.log(ageJonas, ageSarah);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`just a regular string`);
console.log('string with\n\
multiple \n\
lines');



const age = 15;

if(age >= 18){
console.log('Sarah can start driving license');
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah must wait ${yearsLeft} years`);
}


const birthYear = 1991;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);


//type concersion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
//console.log('I am' + '23' + 'years old');
console.log('23' - '10' - '3');
console.log('23'/'2');
console.log('23' > '18');

let n = '1' + 1; //'11'
n = n - 1; 
console.log(n);


// 5 falsy values: 0, ' ', undefuned, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height = 100;
if(height) {
    console.log("Yay! Height is defined!");
} else {
    console.log("Height is UNDEFINED");
}

const age = 18;
if(age === 18) console.log("You just became an adult(strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number (prompt("what's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log("Cool, 23 is an amazing number!");
} else if (favorite === 7){
    console.log("7 is also a cool number");
} else if (favorite === 9){
    console.log("9 is also a cool number");
}else {
    console.log("Not a cool number");
}

if(favorite !== 23) console.log("Why not 23?");



const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true; //c
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && isTired) {
        console.log('Sarah is able to drive!');
    } else {
        console.log('Someone else should drive...');
    }


//switch statement
const day = 'wednesday';

switch(day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday': 
        console.log('prepare video');
        break;
    case 'wednesday': 
        console.log('Plan course code examples');
        break;
    case 'thursday': 
        console.log('Go to coding meetup');
        break;
    case 'friday': 
        console.log('grade course work');
        break;
    case 'saturday': 
        console.log('rest');
        break;
    case 'sunday': 
        console.log('relax');
        break;
        default: 
        console.log('Not valid day');
}



if(day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare video');
} else if (day === 'wednesday') {
    console.log('Plan course code examples');
} else if (day === 'thursday') {
    console.log('Go to coding meetup');
} else if (day === 'friday') {
    console.log('grade course work');
} else if (day === 'saturday') {
    console.log('rest');
} else if (day === 'sunday') {
    console.log('relax');
} else {
    console.log('Not valid day');
}



3 + 4
1991
true && false && !false

if (23>10) {
    const str= '23 is bigger';
}

const me = 'Kristy';
console.log(`I'm ${2037 - 1998} years old ${me}`);
*/

//consitional ter4nary operator, expression
const age = 23;
age >= 18 ? console.log('I like wine.'):
console.log('I like water.');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
//expressions in template literal