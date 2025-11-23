function loadProfileBase() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Profile Loaded"), 2000)
    );
}

function loadPostsBase() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Posts Loaded"), 1500)
    );
}

function loadMessagesBase() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Messages Loaded"), 1000)
    );
}

function createLoadersWithRandomFailure() {
    const loaders = [loadProfileBase, loadPostsBase, loadMessagesBase];
    const names = ["Profile", "Posts", "Messages"];

    const failIndex = Math.floor(Math.random() * loaders.length);

    return loaders.map((fn, index) => {
        return () =>
            new Promise((resolve, reject) => {
                fn().then((msg) => {
                    if (index === failIndex) {
                        reject(names[index] + " failed to load (simulated).");
                    } else {
                        resolve(msg);
                    }
                });
            });
    });
}

const [loadProfile, loadPosts, loadMessages] = createLoadersWithRandomFailure();

const startTime = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]).then(
    (results) => {
        const endTime = Date.now();
        const totalSeconds = ((endTime - startTime) / 1000).toFixed(2);

        console.log("All sections settled (either fulfilled or rejected):");
        results.forEach((result, index) => {
            const name = ["Profile", "Posts", "Messages"][index];
            if (result.status === "fulfilled") {
                console.log(name + " SUCCESS:", result.value);
            } else {
                console.log(name + " FAILURE:", result.reason);
            }
        });

        console.log("Total time taken:", totalSeconds, "seconds");
    }
);