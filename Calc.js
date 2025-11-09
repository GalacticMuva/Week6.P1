let input = require("prompt-sync")();

// --- Declarations ---
let numberA;
let numberB;
let CalcResults = [];

console.log("Basic Two-Number Calculator");

//While Loop
while (true) {

  let inputA = input("Enter the first number (A): ").trim();
  let inputB = input("Enter the second number (B): ").trim();
  
  // 1. Blank inputs
  if (inputA === "" || inputB === "") {
    console.log("\n❌ ERROR: Cannot leave input blank. Please enter a number.");
    continue; 
  }
  
  numberA = parseInt(inputA);
  numberB = parseInt(inputB);

  if (numberA === 0 || numberB === 0 || numberA !== parseInt(inputA) || numberB !== parseInt(inputB)) {
    console.log("\n❌ ERROR: Input must be non-zero whole numbers (integers). Please try again.");
    continue;
  }
  break; 
}
//End Loop


// 2. CALCULATIONS 
// 2a. Addition (+)
let sum = numberA + numberB;
CalcResults.push(`+ Result: ${sum}`);

// 2b. Subtraction (-)
let difference = numberA - numberB;
CalcResults.push(`- Result: ${difference}`);

// 2c. Multiplication (*)
let product = numberA * numberB;
CalcResults.push(`* Result: ${product}`);

// 2d. Division (/)
let quotient = numberA / numberB;
CalcResults.push(`/ Result: ${quotient}`);

// 3. FINAL OUTPUT
console.log(" Results");

for (let result of CalcResults) {
  console.log(result);
}
