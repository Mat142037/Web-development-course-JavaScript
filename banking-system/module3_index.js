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

account2.deposit(200);

account3.checkBalance();

account4.deposit(140);

account5.withdraw(50);

account6.deposit(10);

