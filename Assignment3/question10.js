"use strict";
function outer() {
    console.log("At start of outer, count =", count);
    var count = 5;
    function inner() {
        console.log("At start of inner, count =", count);
        var count = 10;
        console.log("After inner var declaration, count =", count);
    }
    inner();
    console.log("After inner call, outer count =", count);
}

console.log("=== Q10 Nested Hoisting & Closures ===");
outer();

/*
Prediction & explanation:
- When 'outer' starts, var count is hoisted to the top of outer with initial value undefined.
  So the first console.log prints "At start of outer, count = undefined".
- Then count = 5;
- inner() runs:
  Inside inner, 'var count' is hoisted at start of inner function, so inner's local count shadows outer's count.
  At the first log inside inner, inner's local count is undefined (hoisted but not yet assigned).
  Then var count = 10; then prints 10.
- After inner returns, outer's count remains 5.

Expected output sequence:
At start of outer, count = undefined
At start of inner, count = undefined
After inner var declaration, count = 10
After inner call, outer count = 5

Arrow function variant:
- If inner were converted to an arrow function that does NOT declare its own 'count' var,
  it would close over outer's 'count' variable and log outer's value (5).
- If arrow still declares var count inside it, behavior is same as above (hoisting inside the arrow's function body).

Debug / Call stack notes:
- Step into outer -> see outer activation record with count: undefined -> then count becomes 5.
- Step into inner -> new frame; observe its local count (undefined) before assignment.
- Watch expressions: outer.count (not directly accessible but watch 'count' while stepping), call stack shows inner -> outer -> global.
*/