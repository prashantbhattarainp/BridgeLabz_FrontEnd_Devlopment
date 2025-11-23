/*
Predicted output order:

1. "Script start"           // synchronous
2. "Script end"             // synchronous
3. "Promise callback"       // microtask (after main script)
4. "Timeout callback"       // macrotask (after microtasks)

Reason:
- All synchronous console.log statements run first in order.
- Then the event loop empties the microtask queue (Promises).
- After all microtasks are done, it processes macrotasks (setTimeout).
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve()
    .then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:

- Even though setTimeout has 0 ms delay, it is still put into the
  macrotask queue, which runs AFTER the microtask queue.

- Promise.then callbacks are scheduled as microtasks, which have
  higher priority. The event loop always processes microtasks
  before going back to the macrotask queue.

So the actual output is:

Script start
Script end
Promise callback
Timeout callback
*/