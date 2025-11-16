// Q3. Monthly Expense Tracker

let expenses = [4000, 1200, 8000, 2000, 1500]; 

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];

let average = total / expenses.length;

total += total * 0.10;

console.log("Total (after tax):", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount with 10% tax:", total.toFixed(2));