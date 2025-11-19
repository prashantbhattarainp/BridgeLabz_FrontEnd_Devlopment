"use strict";
class InvalidOperationError extends Error { }
class MathOperationError extends Error { }

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function compute(op, a, b) {
    switch (op) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "divide":
            if (b === 0) throw new MathOperationError("Divide by zero error");
            return a / b;
        case "power":
            return Math.pow(a, b);
        case "root":
            if (a < 0) throw new MathOperationError("Root of negative number");
            if (b === 0) throw new MathOperationError("Root degree cannot be zero");
            return Math.pow(a, 1 / b);
        default:
            throw new InvalidOperationError(`Operation "${op}" not recognized`);
    }
}

console.log("=== Q7 Smart Calculator ===");
for (const op of operations) {
    try {
        const result = compute(op, num1, num2);
        console.log(`Operation "${op}" with (${num1}, ${num2}) => ${result}`);
    } catch (err) {
        console.log(`Operation "${op}" failed: [${err.name}] ${err.message}`);
    }
}