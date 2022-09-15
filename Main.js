let userName = "Vinny";

userName ? console.log('Hello '+userName+"!") : console.log('hello!');

let userQuestion = "Will Brad Pitt win an award?";

console.log(userName+" asks: "+userQuestion);

let randomNumber;
randomNumber = Math.floor(Math.random() *8);
console.log(randomNumber);

let eightBall = '';

if (randomNumber === 1){
  console.log('It is certain');
} else if (randomNumber === 2){
  console.log('It is decidedly so');
} else if (randomNumber === 3){
  console.log('Reply is hazy try again');
} else if (randomNumber === 4){
  console.log('Cannot predict now');
} else if (randomNumber === 5){
  console.log('Do not count on it');
} else if (randomNumber === 6){
  console.log('My sources say no');
} else if (randomNumber === 7 ){
  console.log('Outlook not so good');
} else if (randomNumber === 8){
  console.log('Signs point to yes');
} else if (randomNumber === 0){
  console.log('Big no');
}

console.log('Second Answer (switch):');

switch (randomNumber) {
  case 0:
  console.log("¡Wow yes!");
  break;
  case 1:
  console.log('¡Heck no!');
  break;
  default:
  console.log('¡I am an 8 ball!');
  break;
}

if (!randomNumber){
  console.log("Got zero");
} else {
  console.log('Did not get zero');
}
