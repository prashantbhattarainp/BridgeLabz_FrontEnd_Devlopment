function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}
//
const double = n => n * 2;
const square = n => n * 2;

console.log("Double:", applyOperation([1, 2, 3, 4], double));
console.log("Square:", applyOperation([1, 2, 3, 4], square));