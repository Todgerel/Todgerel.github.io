class Bank{
    static nextNumber;

    /**
     * Constructor for creating a new Account object
     * 
     * @param {Array} accs the account arrays for this bank
     */
    constructor(accs){
        this._accs = accs;
    }
    addAccount(){
        if(!Bank.nextNumber){
            Bank.nextNumber = 100000000;
        }
        const newAcc = new Account(Bank.nextNumber);
        this._accs.push(newAcc);
        Bank.nextNumber++;
        return newAcc.getNumber();
    }
    addSavingsAccount(interest){
        if(!Bank.nextNumber){
            Bank.nextNumber = 100000000;
        }
        const newAcc = new SavingAccount(Bank.nextNumber, interest);
        this._accs.push(newAcc);
        Bank.nextNumber++;
        return newAcc.getNumber();
    }
    addCheckingAccount(overdraft) {
        if(!Bank.nextNumber){
            Bank.nextNumber = 100000000;
        }
        const newAcc = new CheckingAccount(Bank.nextNumber, overdraft);
        this._accs.push(newAcc);
        Bank.nextNumber++;
        return newAcc.getNumber();
    }
    closeAccount(number) {
        this._accs = this._accs.filter((acc) => acc.getNumber() !== number);
    }

    accountReport() {

    }
    endOfMonth() {
        let result = "";
        this._accs.forEach(el => result +=el.endOfMonth());
        return result;
    }
}