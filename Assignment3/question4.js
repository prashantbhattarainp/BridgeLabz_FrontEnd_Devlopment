"use strict";
function showMessage_original() {
    // greeting = "Welcome"; // <- assignment to undeclared variable; strict mode throws ReferenceError
    // console.log(greeting);
}

function showMessage_fixed() {
    let greeting = "Welcome";
    console.log(greeting);
}

console.log("=== Q4 Debugging Mystery ===");
try {
    console.log("Running fixed version:");
    showMessage_fixed();
} catch (err) {
    console.log("Error:", err.message);
}