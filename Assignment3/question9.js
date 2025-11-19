"use strict";
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    try {
        const parsed = JSON.parse(line);
        if (!("user" in parsed) || !("age" in parsed)) {
            throw new Error(`Missing key(s). Required: user, age. Parsed keys: ${Object.keys(parsed).join(",")}`);
        }
        const ageNum = Number(parsed.age);
        if (!isFinite(ageNum)) throw new Error(`Invalid age value: ${parsed.age}`);
        parsed.age = ageNum;
        clean.push(parsed);
        console.log(`Line ${i} parsed successfully:`, parsed);
    } catch (err) {
        errors.push({ line: i, raw: line, message: err.message });
        console.log(`Error parsing line ${i}: ${err.message}`);
    }
}

console.log("\nClean entries:", clean);
console.log("Errors found:", errors);
const adults = clean.filter(u => u.age >= 18);
const under18 = clean.filter(u => u.age < 18);
console.log("Adults (>=18):", adults);
console.log("Under-18:", under18);