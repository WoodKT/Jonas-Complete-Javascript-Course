/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

const bmi = function (mass, height) {
    return mass/height ** 2;
}
//    console.log(bmi(mass, height));

const mark1 = bmi(78, 1.69);
const john1 = bmi(92, 1.95);

const mark2 = bmi(95, 1.88);
const john2 = bmi(85, 1.76);

const markHigherBMI = function (mark, john) {
    if (mark > john){
    console.log(`Mark's BMI is higher than John's at ${mark}!`);
    return true;
    }
    else{
        console.log(`John's BMI is higher than Mark's at ${john}!`)
        return false;
    }
}
console.log(mark1, john1, mark2, john2);
console.log(markHigherBMI(mark1, john1));
console.log(markHigherBMI(mark2, john2));

*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

//my attempt with functions
// const dolphins = [96, 108, 89];
// const koalas = [88, 91, 110];

// const dolphinsA = [97, 112, 101];
// const koalasA = [109, 95, 123];

// const dolphinsB = [97, 112, 101];
// const koalasB = [109, 95, 106];

// const avgScore = function (team){
//     for (var i = 0, sum = 0; i < team.length; i++) {
//         sum += team[i];
// }
//     return sum/i;
// }
// console.log(avgScore(dolphins));

// const cmpTeam = function (team1, team2) {
// if(avgScore(team1) > avgScore(team2)) {
//     console.log(`${team1}, Dolphins win`);
// } else if (avgScore(team2) > avgScore(team1)){
//     console.log(`${team2}, Koalas win`);
// } else {
//     console.log(` Draw between Dolphins ${team1} and Koalas ${team2} `);

// }
// }
// console.log(cmpTeam(dolphins, koalas));
// console.log(cmpTeam(dolphinsA, koalasA));
// console.log(cmpTeam(dolphinsB, koalasB));



//guided answer
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? .15 : .20;

// console.log(`The bill was ${bill}, the tip was ${bill*tip}, and the total value ${bill + bill*tip}`);


