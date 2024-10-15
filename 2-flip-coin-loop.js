const flipCoin = require('./1-flip-coin');

debugger;
for (let i = 0; i < 100; i++) {
  const result = flipCoin();
  console.log(`Flip number ${i} was ${result}`);
}

/* 
Order of Operations:
  1. initialize
  2. while condition is true (`i < size`)
  3. code block
  4. update
  5. **go to 2**
*/