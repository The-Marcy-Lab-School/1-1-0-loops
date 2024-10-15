const prompt = require("prompt-sync")({ sigint: true }); // for later

const randomNum = Math.ceil(Math.random() * 10);
console.log("I'm thinking of a random number. Guess what it is!");

// We're going to pull out this `input` value so we can check it on every loop 
let input;

// We're also going to keep track of remaining guesses
let guessesRemaining = 5

// As long as the input doesn't match the random number above AND
while (input !== randomNum) {
  // Get the user input and do some input checking
  input = prompt("Enter a number or q to quit: ");
  if (input === "q") {
    console.log("Bye!");
    break;
  }
  if (Number.isNaN(Number(input))) {
    console.log("please enter a number");
    continue;
  }

  // Now that we know we've got a number input, we can decrement the guesses
  guessesRemaining -= 1;

  // If the guess matches, congratulate the user and exit the loop
  if (Number(input) === randomNum) {
    console.log(`You got it!! And with ${guessesRemaining} guesses to spare!!!`);
    break;
  }

  // Assuming we didn't exit the loop, break them the bad news
  console.log(`${input}? That's a great number! But not mine!`);

  // And do a final check to see if they will keep going!
  if (guessesRemaining === 0) {
    console.log(`Sorry, you've ran out of luck :(`);
    break;
  }
}

console.log("Thanks for playing!");