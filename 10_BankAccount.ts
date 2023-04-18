class BankAccount {
    balance: number;
    constructor() {
        this.balance = 0;
    }
    deposit(amount: number) {
        this.balance += amount;
    }
    withdraw(amount: number) {
        if (this.balance > amount)
            this.balance -= amount;
    }
    transfer(amount: number, toAccount: BankAccount) {
        this.balance -= amount;
        toAccount.balance += amount;
    }
}

const adyAccount = new BankAccount();
const celAccount = new BankAccount();

adyAccount.deposit(5500);
celAccount.deposit(2000);

celAccount.transfer(2500, adyAccount);

console.log(adyAccount.balance);
console.log(celAccount.balance);
