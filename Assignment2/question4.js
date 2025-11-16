// Q4. Array Performance Analyzer

let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average = scores.reduce((sum, n) => sum + n, 0) / scores.length;

let passedCount = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log(`
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed: ${passedCount}
`);