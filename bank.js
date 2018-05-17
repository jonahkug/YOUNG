class Account{

    withdraw(){

    }

    deposit(){

    }
}

class SavingsAccount extends Account{
    constructor(minBalance=1000){
        super();
        this.minBalance
    }

    deposit(amount){
        if (amount < 0){
            return 'invalid deposit amount'
        }
        this.balance +=amount;
        return this.balance
    }

    withdraw(amount){
        if (amount > this.balance){
            return 'cannot withdraw beyond the current balance';
        } else if (this.balance < 0){
            return 'invalid withdraw amount';

        } else{
            this.balance -= amount;
            if (this.balance < 501){
                this.balance += amount;
                return 'cannot withdraw beyond the minimum account balance';

            }else {
                return this.balance;
            }
        }
    }
}