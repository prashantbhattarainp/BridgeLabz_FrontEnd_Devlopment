function shouldFail(probability = 0.2) {
    return Math.random() < probability;
}

function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Step 1: Boiling water...");
        setTimeout(() => {
            if (shouldFail()) {
                reject("Kettle malfunctioned while boiling water!");
            } else {
                resolve("Water boiled");
            }
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Step 2: Brewing coffee...");
        setTimeout(() => {
            if (shouldFail()) {
                reject("Coffee machine stopped while brewing!");
            } else {
                resolve("Coffee brewed");
            }
        }, 1500);
    });
}

function pourIntoCup() {
    return new Promise((resolve, reject) => {
        console.log("Step 3: Pouring into cup...");
        setTimeout(() => {
            if (shouldFail()) {
                reject("Cup slipped while pouring!");
            } else {
                resolve("Coffee poured");
            }
        }, 1000);
    });
}

boilWater()
    .then((msg) => {
        console.log(msg);
        return brewCoffee();
    })
    .then((msg) => {
        console.log(msg);
        return pourIntoCup();
    })
    .then((msg) => {
        console.log(msg);
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("Coffee process failed:", error);
    });