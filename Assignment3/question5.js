"use strict";


console.log("=== Q5 Hoisting Lab ===");


var score = 50;
console.log("score (after declaration):", score);

function announce() {
    console.log("Game started");
}
announce();

let status = "ready";
function startGame() {
    console.log("status inside startGame:", status);
}
startGame();

const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => {
    console.log("status (arrow):", status);
};

console.log("Calling arrow versions:");
announceArrow();
startGameArrow();