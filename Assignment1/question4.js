// Q4. Academic Performance Evaluator

let marks = [85, 90, 78, 88, 92]; // marks of 5 subjects

let failedSubject = marks.some(m => m < 35);

let total = marks.reduce((sum, m) => sum + m, 0);
let percentage = (total / 500) * 100;

if (failedSubject) {
    console.log("Detained (failed in a subject)");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log("Percentage:", percentage.toFixed(2), "%");