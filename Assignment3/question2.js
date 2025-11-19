"use strict";
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

function safeNumberConversion(value) {
    const n = Number(value);
    if (!isFinite(n)) throw new Error(`Invalid number conversion: ${value}`);
    return n;
}

console.log("=== Q2 Employee Bonus Calculator ===");
for (let i = 0; i < employees.length; i++) {
    try {
        const emp = employees[i];
        if (!emp || !("name" in emp)) throw new Error("Missing employee name");
        const salary = safeNumberConversion(emp.salary);
        const years = safeNumberConversion(emp.years);
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        const totalComp = salary + bonus;
        console.log(
            `Employee: ${emp.name} | Salary: ${salary.toFixed(2)} | Years: ${years} | Bonus: ${bonus.toFixed(2)} | Total Comp: ${totalComp.toFixed(2)}`
        );
    } catch (err) {
        console.log(`Error processing employee index ${i}: ${err.message}`);
    }
}