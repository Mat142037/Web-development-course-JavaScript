import {Bankaccount} from "./bankAccount.js";

const account1 = new Bankaccount(111111, 'Smith', 100);
const account2 = new Bankaccount(222222, 'Holt', 200);
const account3 = new Bankaccount(333333, 'Jones', 150);
const account4 = new Bankaccount(444444, 'Hickling', 300);
const account5 = new Bankaccount(555555, 'Hayes', 50);
const account6 = new Bankaccount(666666, 'Palmer', 500);

account1.withdraw(20);
console.log(account1.balance);

account2.deposit(200);
console.log(account2.balance);

account3.checkBalance();
console.log(account3.balance);

account4.deposit(140);
console.log(account4.balance);

account5.withdraw(50);
console.log(account4.balance);

account6.deposit(10);
console.log(account4.balance);
