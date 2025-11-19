"use strict";
function generatePyramid(rows = 5) {
    console.log(`=== Q6 Pyramid Pattern (rows=${rows}) ===`);
    for (let i = 1; i <= rows; i++) {
        let lineParts = [];
        for (let j = 1; j <= i; j++) {
            lineParts.push("*");
        }
        console.log(lineParts.join(" "));
    }
}

generatePyramid(4);
function generatePyramidWithVar(rows = 4) {
    console.log("\nDemonstrating var usage (possible variable re-use issues):");
    for (var i = 1; i <= rows; i++) {
        var lineParts = [];
        for (var j = 1; j <= i; j++) {
            lineParts.push("*");
        }
        console.log(lineParts.join(" "));
    }
    console.log("After loops with var, i =", i, "j =", j);
}

generatePyramidWithVar(4);