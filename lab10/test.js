const expect = chai.expect;
let acc = new Account(123456789);
let savAcc = new SavingAccount(998877665, 10);
let checkAcc = new CheckingAccount(112233445, 100);

describe("Number:", function(){
    it("Account number must be 123456789", function(){
      assert.equal(acc.getNumber(), 123456789);
    })
  });

  describe("Balance:", function(){
    it("Balance must be 0", function(){
      assert.equal(acc.getBalance(), 0);
    })
  });

  describe("Deposit:", function(){
    it("Balance must be 100", function(){
      acc.deposit(100);
      assert.equal(acc._balance, 100);
    })
    it("Deposit amount must be greater than 0.0", function(){        
      expect( () => acc.deposit(-5) ).to.throw('Deposit amount has to be greater than zero');
    })
  });

  describe("Withdraw:", function(){
    it("Balance must be 90", function(){
      acc.withdraw(10);
      assert.equal(acc._balance, 90);
    })
    it("Withdraw amount must be less than Balance", function(){        
      expect( () => acc.withdraw(105) ).to.throw('Insufficient funds');
    })
    it("Withdraw amount has to be greater than zero", function(){        
      expect( () => acc.withdraw(-5) ).to.throw('Withdraw amount has to be greater than zero');
    })
  });

  describe("Get Interest:", function(){
    it("Interest must be 10", function(){
      assert.equal(savAcc.getInterest(), 10);
    })
  });

  describe("Set Interest:", function(){
    it("Interest must be 5", function(){
      savAcc.setInterest(5);
      assert.equal(savAcc.getInterest(), 5);
    })
  });

  describe("Add Interest:", function(){
    it("Balance must be 0", function(){
      savAcc.deposit(100);
      savAcc.addInterest();
      assert.equal(savAcc.getBalance(),105);
    })
  });

  describe("Get Overdraft Limit:", function(){
    it("Overdraft Limit must be 100", function(){
      assert.equal(checkAcc.getOverdraftLimit(), 100);
    })
  });

  describe("Set Overdraft Limit:", function(){
    it("Overdraft Limit must be 50", function(){
      checkAcc.setOverdraftLimit(50);
      assert.equal(checkAcc.getOverdraftLimit(), 50);
    })
  });

  describe("Withdraw:", function(){
    it("Balance must be -40", function(){
      checkAcc.withdraw(40);
      assert.equal(checkAcc.getBalance(), -40);
    })
    it("Withdraw amount is more than Overdraft limit", function(){        
      expect( () => checkAcc.withdraw(20) ).to.throw('Insufficient funds');
    })
    it("Withdraw amount has to be greater than zero", function(){        
      expect( () => acc.withdraw(-5) ).to.throw('Withdraw amount has to be greater than zero');
    })
  });

  let bank1 = new Bank([]);

  describe("Bank - addAccount", function(){
    it("First bank account number must start from 100000000", function(){
        assert.equal(bank1.addAccount(), 100000000);        
    })
});

describe("Bank - addSavingsAccount", function(){
    it("Saving account number must be 100000001", function(){
        assert.equal(bank1.addSavingsAccount(5), 100000001);  
        bank1._accs[1].deposit(1000);
    })
});

describe("Bank - addCheckingAccount", function(){
    it("Checking account number must be 100000002", function(){
        assert.equal(bank1.addCheckingAccount(100), 100000002);        
    })
});

describe("Bank - endOfMonth", function(){
    it("Bank endOfMonth should perform all accounts's endOfMonth operation", function(){
        assert.equal(bank1.endOfMonth(), "Saving account 100000001: balance 1050. Interest: 5 Checking account 100000002: balance 0. Overdraft Limit: 100");        
    })
});

