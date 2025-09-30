const transactions = [];

function addTransaction(id, type, amount, date) {
    const transaction = {
        id: parseInt(id),
        type,
        amount: parseFloat(amount),
        date
    };
    transactions.push(transaction);
    console.log("Transaction added successfully!");
    showHistory();
}

function showHistory() {
    console.log("\n=== TRANSACTION HISTORY ===");
    if (transactions.length === 0) {
        console.log("No transactions yet.");
    } else {
        transactions.forEach(t => {
            console.log(`ID: ${t.id}, Type: ${t.type}, Amount: ${t.amount}, Date: ${t.date}`);
        });
    }
}

// Example usage (you can replace with prompt or test data):
addTransaction(1, "Deposit", 5000, "2025-09-30");
addTransaction(2, "Withdrawal", 2000, "2025-10-01");
