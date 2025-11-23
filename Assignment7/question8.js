function submitOrder() {
    return new Promise((resolve, reject) => {
        const success = Math.random() >= 0.5;

        setTimeout(() => {
            if (success) {
                resolve("Order submitted successfully!");
            } else {
                reject("Order submission failed (simulated).");
            }
        }, 500);
    });
}

async function processOrder(maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success ->`, result);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed ->`, error);
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed");
            }
        }
    }
}

(async function run() {
    try {
        await processOrder();
        console.log("Order processed successfully within allowed attempts.");
    } catch (error) {
        console.error("Final result:", error.message);
    }
})();