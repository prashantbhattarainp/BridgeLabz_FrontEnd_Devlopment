// Operators => Arithmatic
//                  Relational/Comparision
//                  Logical
//                  Bitwise
//                  Assignment
//                  TypeOf
//                  Ternary
//                  Unary
//                  nullish Coalsecing ??

// 1. ARITHMETIC OPERATORS

let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b); // 1000 (10³)


// 2. RELATIONAL / COMPARISON OPERATORS
console.log("Relational/Comparison Operators:");
console.log("Equal to:", a == b);          // false
console.log("Not equal to:", a != b);      // true
console.log("Strict equal to:", a === b);  // false
console.log("Strict not equal to:", a !== b); // true
console.log("Greater than:", a > b);       // true
console.log("Less than:", a < b);          // false
console.log("Greater or equal:", a >= 10); // true
console.log("Less or equal:", b <= 5);     // true


// 3. LOGICAL OPERATORS
let x = true;
let y = false;

console.log("Logical Operators:");
console.log("AND (&&):", x && y); // false
console.log("OR (||):", x || y);  // true
console.log("NOT (!):", !x);      // false


// 4. BITWISE OPERATORS

let m = 5;   // binary 0101
let n = 3;   // binary 0011

console.log("Bitwise Operators:");
console.log("AND (&):", m & n);   // 1  (0101 & 0011 = 0001)
console.log("OR (|):", m | n);    // 7  (0101 | 0011 = 0111)
console.log("XOR (^):", m ^ n);   // 6  (0101 ^ 0011 = 0110)
console.log("NOT (~):", ~m);      // -6 (inverts bits)
console.log("Left Shift (<<):", m << 1); // 10 (0101 << 1 = 1010)
console.log("Right Shift (>>):", m >> 1); // 2 (0101 >> 1 = 0010)


// 2. ASSIGNMENT OPERATORS

let x1 = 5;

console.log("Assignment Operators:");
x1 += 3; // x = x + 3
console.log("+= :",x1); // 8

x1 -= 2; // x = x - 2
console.log("-= :", x1); // 6

x1 *= 2; // x = x * 2
console.log("*= :", x1); // 12

x1 /= 3; // x = x / 3
console.log("/= :", x1); // 4

x1 %= 3; // x = x % 3
console.log("%= :", x1); // 1

x1 **= 3; // x = x ** 3
console.log("**= :", x1); // 1


// 5. TERNARY OPERATOR
// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log("Ternary Operator:", canVote);
 

// 6. UNARY OPERATORS
let num = 5;
console.log("Unary Operators:");
console.log("Unary Plus:", +num);      // 5
console.log("Unary Negation:", -num);  // -5
console.log("Increment (++):", ++num); // 6
console.log("Decrement (--):", --num); // 5
console.log("typeof Operator:", typeof num); // number


// 7. NULLISH COALESCING OPERATOR (??)
// Returns the right-hand value only if the left-hand is null or undefined
let userName = null;
let defaultName = "Guest";

let finalName = userName ?? defaultName;
console.log("Nullish Coalescing Operator (??):", finalName); // "Guest"

userName = "Ayush";
finalName = userName ?? defaultName;
console.log("If defined:", finalName); // "Ayush"


//8. Type Operator
console.log(typeof 10);              // "number"
console.log(typeof "Hello");         // "string"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (special case in JS)
console.log(typeof {name: "Ayush"}); // "object"
console.log(typeof [1, 2, 3]);       // "object" (arrays are also objects)
console.log(typeof function(){});    // "function"
console.log(typeof Symbol("id"));    // "symbol"
console.log(typeof 123n);            // "bigint"