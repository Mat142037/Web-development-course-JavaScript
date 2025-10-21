//Class for banking system
export default class Bankaccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    withdraw(withdrawAmount) { //Withdraw method
        if  (this.balance >= withdrawAmount) {
            this.balance -= withdrawAmount;
        }
    }
    deposit(depositAmount) { //Deposit method
        this.balance += depositAmount; 
    }
    checkBalance() { //Check balance method
        this.balance
    }
}