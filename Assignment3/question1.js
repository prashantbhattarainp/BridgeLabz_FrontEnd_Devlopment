"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

function isValidNumberConversion(value) {
    if (value === null || value === undefined) return false;
    const s = String(value).trim();
    const numericLiteral = /^[-+]?\d+(\.\d+)?$/;
    return numericLiteral.test(s) && isFinite(Number(s));
}

const validNumbers = [];
const invalidNumbers = [];
const detailedReport = [];

for (let i = 0; i < apiData.length; i++) {
    const original = apiData[i];
    const asString = String(original);
    const asNumber = Number(original);
    const asBoolean = Boolean(original);

    if (isValidNumberConversion(original)) {
        validNumbers.push(asNumber);
    } else {
        invalidNumbers.push({ index: i, original, asNumber });
    }

    detailedReport.push({
        index: i,
        original,
        asString,
        asNumber,
        asBoolean,
        numberValid: isValidNumberConversion(original),
    });
}

console.log("=== Q1 Dynamic Data Parser Report ===");
for (const entry of detailedReport) {
    console.log(
        `Index ${entry.index} | original: ${JSON.stringify(entry.original)} | String: "${entry.asString}" | Number: ${entry.asNumber} | Boolean: ${entry.asBoolean} | numericValid: ${entry.numberValid}`
    );
}
console.log("\nValid numeric array:", validNumbers);
console.log("Invalid numeric entries (skipped):", invalidNumbers);