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
         console.log('You have withdrawn ' + withdrawAmouunt + ' your new balnce is ', + this.balance)
    }
    deposit(depositAmount) { //Deposit method
        this.balance += depositAmount;
        console.log('You have deposited ' + depositAmount + ' your new balnce is ', + this.balance)
    }
    checkBalance() { //Check balance method
        console.log('Your balance is ' + this.balance);
    }

}
