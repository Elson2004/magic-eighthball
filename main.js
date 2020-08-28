//building a magic eight ball using control flow
let userName = '';

//this will decide what do if the user enters a name or not

//this is the same as the code below
/* if (userName === 'Jane') {
        console.log('Hello, Jane!');
    } else {
        console.log('Hello!');
    } 
*/

//using ternary expression as alternative
userName = 'Jane';
userName === 'Jane' ? console.log('Hello, Jane!') : console.log('Hello!');

let userQuestion = 'predict a number that wil appear?';
console.log(userQuestion + ` Asked by ${userName}`);

//want to generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

//we'll save a value in it depending on the randomNumber
let eightBall = '';

//the eightBall var is being reassigned [(one) =]
eightBall = randomNumber;


switch(eightBall) {
    case 0:
        console.log('It is certain');
        break;
    case 1:
        console.log('It is decidedly so');
        break;
    case 2:
        console.log('Reply hazy try again');
        break;
    case 3:
        console.log('Cannot predict now');
        break;
    case 4:
        console.log('Do not count on it');
        break;
    case 5:
        console.log('My sources say no');
        break;
    case 6:
        console.log('outlook not so good');
        break;
    case 7:
        console.log('Signs pint to yes');
        break;
    default:
        console.log('Number not found');
        break;
}
//or it can be done using if else statements with the same variable eightBall

if (eightBall === 0) {
    console.log('It is certain');
} else if (eightBall === 1) {
    console.log('It is decidedly so');
} else if (eightBall === 2) {
    console.log('Cannot predict now');
} else if (eightBall === 3) {
    console.log('Do not count on it');
} else if (eightBall === 4) {
    console.log('Reply hazy try again');
} else if (eightBall === 5) {
    console.log('My sources say no');
} else if (eightBall === 6) {
    console.log('Outlook not so good');
} else if (eightBall === 7) {
    console.log('Signs point to yes')
} else {
    console.log('Number not found')
}