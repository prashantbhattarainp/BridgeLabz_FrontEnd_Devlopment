function serverA() {
    return new Promise((resolve, reject) => {
        console.log("Server A: Deployment started...");
        const shouldFail = Math.random() < 0.3;
        setTimeout(() => {
            if (shouldFail) {
                reject("Server A deployment failed!");
            } else {
                resolve("Server A deployment completed.");
            }
        }, 2000); // 2 seconds
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        console.log("Server B: Deployment started...");
        const shouldFail = Math.random() < 0.3;
        setTimeout(() => {
            if (shouldFail) {
                reject("Server B deployment failed!");
            } else {
                resolve("Server B deployment completed.");
            }
        }, 3000); // 3 seconds
    });
}

const promiseA = serverA();
const promiseB = serverB();

Promise.all([promiseA, promiseB])
    .then((results) => {
        console.log("Deployment completed for all servers:");
        console.log(results);
    })
    .catch((error) => {
        console.error("At least one deployment failed:", error);
    });

Promise.race([promiseA, promiseB])
    .then((fastest) => {
        console.log("Fastest response:", fastest);
    })
    .catch((error) => {
        console.error("Fastest response (but failed):", error);
    });