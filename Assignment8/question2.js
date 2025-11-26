const menu = {
    burger: 100,
    pizza: 250,
    fries: 80,
    coke: 50
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(`Invalid item: ${item}`);
            return menu[item];
        });

        const total = prices.reduce((sum, price) => sum + price, 0);
        console.log(`Your total bill: ₹${total}`);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

calculateBill(["burger", "fries", "coke"]);
calculateBill(["pizza", "pasta"]); // Invalid item