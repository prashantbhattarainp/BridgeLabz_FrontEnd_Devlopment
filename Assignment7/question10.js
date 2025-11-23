console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise.then callback (microtask)");
  });

console.log("Synchronous log in between");
console.log("End");

/*
Explanation (in simple words):

1. All synchronous code runs first, in order.
   So we see:
   "Start"
   "Synchronous log in between"
   "End"

2. After the main script finishes, the JavaScript engine processes
   the microtask queue before the macrotask queue.

   Microtasks include:
     - Promise.then callbacks
     - async/await continuations
   Macrotasks include:
     - setTimeout, setInterval
     - I/O callbacks, etc.

3. So the order of logs will be:

   Script start:
     "Start"
     "Synchronous log in between"
     "End"

   Then microtasks:
     "Promise.then callback (microtask)"

   Then macrotasks:
     "setTimeout callback (macrotask)"
*/