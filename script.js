let balance = 0;
let enteredAmount = "";
const correctPin = "1234";  // Set correct PIN here

function validatePin() {
    const enteredPin = document.getElementById('pin-input').value;
    if (enteredPin === correctPin) {
        document.getElementById('pin-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
    } else {
        document.getElementById('message').innerText = "Incorrect PIN. Please try again.";
    }
}

function enterNumber(num) {
    enteredAmount += num;
    updateAmountDisplay();
}

function clearAmount() {
    enteredAmount = "";
    updateAmountDisplay();
}

function backspace() {
    enteredAmount = enteredAmount.slice(0, -1);
    updateAmountDisplay();
}

function updateAmountDisplay() {
    const display = document.getElementById("amount-display");
    display.innerText = enteredAmount ? `$${enteredAmount}` : "Enter Amount";
}

function processTransaction(type) {
    const amount = parseFloat(enteredAmount);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("message").innerText = "Please enter a valid amount.";
        return;
    }

    if (type === "deposit") {
        balance += amount;
        document.getElementById("message").innerText = `Deposited $${amount}.`;
    } else if (type === "withdraw") {
        if (amount > balance) {
            document.getElementById("message").innerText = "Insufficient balance!";
            return;
        }
        balance -= amount;
        document.getElementById("message").innerText = `Withdrew $${amount}.`;
    }
    updateBalanceDisplay();
    clearAmount();
}

function updateBalanceDisplay() {
    document.getElementById("balance-display").innerText = `Balance: $${balance}`;
}

function checkBalance() {
    document.getElementById("message").innerText = `Current balance is $${balance}`;
}
