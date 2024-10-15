const prompt = require("prompt-sync")({ sigint: true }); // for later

const randomNumber = Math.ceil(Math.random() * 10);
console.log("I'm thinking of a random number. Guess what it is!");

while (true) {
  const input = prompt("Enter a number or q to quit: ");
  if (input === "q") {
    console.log("Bye!");
    break;
  }
  if (Number.isNaN(Number(input))) {
    console.log("please enter a number");
    continue;
  }
  console.log(`${input}? That's a great number!`);
}

console.log("Thanks for playing!");