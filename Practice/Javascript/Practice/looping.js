// Control Statement => 2. Looping {for, while, do while, for in, for of}

//For Loop
console.log("For Loop Example:");

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

//While Loop
console.log("\nWhile Loop Example:");

let i = 1;
while (i <= 5) {
  console.log("Number:", i);
  i++;
}

//do...while Loop
console.log("\nDo While Loop Example:");

let j = 1;
do {
  console.log("Value:", j);
  j++;
} while (j <= 5);

//for...in Loop
console.log("\nFor...in Loop Example:");

let student = {
  name: "Ayush",
  age: 20,
  course: "Web Development"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}

//for..of Loop
console.log("\nFor...of Loop Example:");

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}