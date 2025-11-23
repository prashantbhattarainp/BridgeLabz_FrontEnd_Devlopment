function design(callback) {
    setTimeout(() => {
        console.log("Stage 1: Design complete.");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Stage 2: Build complete.");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Stage 3: Test complete.");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Stage 4: Deploy complete.");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("Stage 5: Celebrate 🎉");
        callback && callback();
    }, 1000);
}

// -------- 1) Callback Hell version ----------
function runPipelineWithCallbacks() {
    console.log("Running build pipeline with CALLBACKS...");

    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate(() => {
                        console.log("Pipeline finished (callback hell version).");
                    });
                });
            });
        });
    });
}

// -------- 2) async/await version ----------
// Convert each stage to return a Promise
function designAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Stage 1: Design complete.");
            resolve();
        }, 1000);
    });
}

function buildAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Stage 2: Build complete.");
            resolve();
        }, 1000);
    });
}

function testAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Stage 3: Test complete.");
            resolve();
        }, 1000);
    });
}

function deployAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Stage 4: Deploy complete.");
            resolve();
        }, 1000);
    });
}

function celebrateAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Stage 5: Celebrate 🎉");
            resolve();
        }, 1000);
    });
}

async function runPipelineAsync() {
    console.log("Running build pipeline with async/await...");

    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();

    console.log("Pipeline finished (async/await version).");
}

// Run both to compare
runPipelineWithCallbacks();
setTimeout(() => {
    console.log("\n-----------------------------\n");
    runPipelineAsync();
}, 6000);

/*
Why async/await improves readability?

- In the callback version, we get nested functions inside functions.
  This is called "callback hell" or "pyramid of doom".
  It becomes hard to read, debug and maintain.

- With async/await, the asynchronous steps look like simple sequential code.
  There's no deep nesting, and error handling using try/catch is much cleaner.
*/