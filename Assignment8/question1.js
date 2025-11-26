class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }
}

// Test for 3 students
const s1 = new Student("Ayush", [95, 88, 92]);
const s2 = new Student("Ravi", [70, 65, 72]);
const s3 = new Student("Simran", [40, 55, 48]);

console.log(`${s1.name} Grade: ${s1.getGrade()}`);
console.log(`${s2.name} Grade: ${s2.getGrade()}`);
console.log(`${s3.name} Grade: ${s3.getGrade()}`);