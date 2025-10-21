import {Bankaccount} from "./bankAccount.js";

//Bank accounts
const account1 = new Bankaccount(111111, 'Smith', 100);
const account2 = new Bankaccount(222222, 'Holt', 200);
const account3 = new Bankaccount(333333, 'Jones', 150);
const account4 = new Bankaccount(444444, 'Hickling', 300);
const account5 = new Bankaccount(555555, 'Hayes', 50);
const account6 = new Bankaccount(666666, 'Palmer', 500);

//Banking actions
account1.withdraw(20);
console.log('Your account balance is' + account1.balance);

account2.deposit(200);
console.log('Your account balance is' + account2.balance);

account3.checkBalance();
console.log('Your account balance is' + account3.balance);

account4.deposit(140);
console.log('Your account balance is' + account4.balance);

account5.withdraw(50);
console.log('Your account balance is' + account5.balance);

account6.deposit(10);
console.log('Your account balance is' + account6.balance);
