"use strict";
class TransactionError extends Error { }
class NegativeAmountError extends TransactionError { }
class MissingFieldError extends TransactionError { }
class NullEntryError extends TransactionError { }

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

console.log("=== Q3 Transaction Validator ===");
for (let i = 0; i < transactions.length; i++) {
    try {
        const tx = transactions[i];
        if (tx === null) throw new NullEntryError("Transaction entry is null");
        if (!("id" in tx) || !("amount" in tx)) throw new MissingFieldError(`Missing id/amount in transaction at index ${i}`);
        if (typeof tx.amount !== "number" || typeof tx.id !== "number") throw new TransactionError("Invalid types for id or amount");
        if (tx.amount < 0) throw new NegativeAmountError(`Negative amount for transaction id ${tx.id}`);
        valid.push(tx);
        console.log(`Valid transaction id=${tx.id}, amount=${tx.amount}`);
    } catch (err) {
        invalid.push({ index: i, error: err.name, message: err.message });
        console.log(`Invalid transaction at index ${i}: [${err.name}] ${err.message}`);
    }
}

console.log("\nFinal Report:");
console.log(`Successful transactions: ${valid.length}`);
console.log(`Failed transactions: ${invalid.length}`);
console.log("Invalid details:", invalid);