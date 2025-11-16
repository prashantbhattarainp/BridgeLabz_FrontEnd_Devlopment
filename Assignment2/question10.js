// Q10. Departmental Employee Evaluator

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let dept of departments) {
    let deptName = dept[0];
    let score = dept[1];

    let remark = "";

    if (score >= 90) {
        remark = "Excellent";
    } else if (score >= 75) {
        remark = "Good";
    } else if (score >= 60) {
        remark = "Average";
    } else {
        remark = "Needs Improvement";
    }

    console.log(`${deptName}: ${remark}`);
}