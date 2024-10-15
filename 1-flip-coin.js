// a basic function that returns "heads" or "tails" randomly
const flipCoin = () => {
  const random = Math.random();
  return random > 0.5 ? "heads" : "tails";
}

// Please comment these out when you're done :)
// console.log(`Flip number 1 was ${flipCoin()}`);
// console.log(`Flip number 2 was ${flipCoin()}`);
// console.log(`Flip number 3 was ${flipCoin()}`);
// console.log(`Flip number 4 was ${flipCoin()}`);
// console.log(`Flip number 5 was ${flipCoin()}`);

module.exports = flipCoin;
