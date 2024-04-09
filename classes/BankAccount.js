class BankAccount{

    constructor(ownerName, accountNumber, balance){
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`$${amount} has been deposited to your account. Your new balance is $${this.balance}`);
        }else {
            console.log('Deposit amount must be greater than 0');
        }
    }

    withdrawl(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`$${amount} has been withdrawn from your account. Your new balance is $${this.balance}`);
        } else {
            console.log('Insufficient funds');
        }
    }

    viewBalance(){
        console.log(`Your current balance is $${this.balance}`);
    }

}

const rogersAccount = new BankAccount('Roger', 123456, 1000);
const tomsAccount = new BankAccount('Tom', 654321, 500);

rogersAccount.withdrawl(100);
tomsAccount.deposit(100);
rogersAccount.viewBalance();
tomsAccount.viewBalance();