const prompt = require("prompt-sync")({ sigint: true }); // for later

const randomNum = Math.ceil(Math.random() * 10);
let input;

console.log("I'm thinking of a random number. Guess what it is!");

while (input !== randomNum) {
  input = prompt("Enter a number or q to quit: ");

  if (input === "q") {
    console.log("Bye!");
    break;
  }
  if (Number.isNaN(Number(input))) {
    console.log("please enter a number");
    continue;
  }
  if (Number(input) === randomNum) {
    console.log('You got it!!!');
    break;
  }
  console.log(`${input}? That's a great number! But not mine!`);
}