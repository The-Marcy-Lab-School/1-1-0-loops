const prompt = require("prompt-sync")({ sigint: true }); // for later

while (true) {
  const input = prompt("Enter a number or q to quit: ");
  if (input === "q") {
    console.log("Bye!");
    break; // <--- how is this different from return??
  }
  if (Number.isNaN(Number(input))) {
    console.log("please enter a number");
    continue;
  }
  console.log(`${input}? That's a great number!`);
}

console.log("See you next time!");