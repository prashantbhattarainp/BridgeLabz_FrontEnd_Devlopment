class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount <= 0) throw new Error("Invalid deposit amount!");
        this.#balance += amount;
        console.log(`Deposited ₹${amount}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) throw new Error("Insufficient balance!");
        this.#balance -= amount;
        console.log(`Withdrawn ₹${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();

try {
    acc.deposit(5000);
    acc.withdraw(2000);
    acc.withdraw(4000); // Invalid
} catch (err) {
    console.error("Error:", err.message);
}

console.log("Final Balance:", acc.getBalance());