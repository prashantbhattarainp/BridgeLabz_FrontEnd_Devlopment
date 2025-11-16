// Q2. Multi-Type Data Summary

let nameVal = "Prashant";
let age = 21;
let isStudent = true;
let hobbies = ["coding", "cricket"];
let userObj = { city: "Kathmandu", score: 90 };
let emptyValue = null;
let notAssigned;

console.table({
    Name: { value: nameVal, type: typeof nameVal },
    Age: { value: age, type: typeof age },
    Student: { value: isStudent, type: typeof isStudent },
    Hobbies: { value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    UserObject: { value: userObj, type: typeof userObj },
    NullValue: { value: emptyValue, type: "null" },
    UndefinedValue: { value: notAssigned, type: typeof notAssigned }
});