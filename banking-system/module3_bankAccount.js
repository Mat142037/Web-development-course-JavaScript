export default class Bankaccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    withdraw(withdrawAmount) {
        if  (this.balance >= withdrawAmount) {
            this.balance -= withdrawAmount;
        }
    }
    deposit(depositAmount) {
        this.balance += depositAmount; 
    }
    checkBalance() {
        this.balance
    }
}