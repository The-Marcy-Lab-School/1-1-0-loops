/*
Write a program that asks the user to enter a number.
Then, flip a coin that many times, keeping count of how many times heads was flipped.
Finally, print back the final number of heads to the user like this:

You flipped [heads flipped] heads out of [total] flips! That is [percent]%!
*/




















// solution below.....



















// you sure you want to see it???
























const flipCoin = require('./1-flip-coin');
const prompt = require('prompt-sync')();

const flips = prompt('How many times do you want to flip the coin? ');
if (isNaN(Number(flips))) {
  console.log(`Sorry, ${flips} is not a number`);
  return;
}

let heads = 0;
for (let i = 0; i < flips; i++) {
  const result = flipCoin();
  heads += result === 'heads' ? 1 : 0;
}
console.log(`You flipped ${heads} heads out of ${flips}. Thats ${(heads / flips) * 100}%!`);