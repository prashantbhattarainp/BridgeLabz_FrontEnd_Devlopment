// Q3. Math Utility Dashboard

let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomValue = Math.floor(Math.random() * 41) + 10;

console.log(`
--- Math Dashboard Summary ---
Rounded: ${roundedValue}
Square Root: ${squareRoot}
Power (x³): ${powerValue}
Random (10-50): ${randomValue}
`);