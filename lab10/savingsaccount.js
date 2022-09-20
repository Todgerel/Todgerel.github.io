class SavingAccount extends Account{
    constructor(number, interest) {
       super(number);
       this._interest = interest; 
    }
    getInterest() {
        return this._interest;
    }
    setInterest(interest){
       this._interest = interest;
    }
    addInterest(){
        this._balance += this._balance * this._interest / 100;
    }
    toString() {
        return "Saving account " + this._number + ": balance " + this._balance + ". Interest: " + this._interest;
    }
    endOfMonth() {
        this.addInterest();
        return "Saving account " + this.getNumber() + ": balance " + this.getBalance() + ". Interest: " + this.getInterest() + " ";    
    }
}