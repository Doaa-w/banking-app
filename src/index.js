
class Bank {
    
    constructor(name){
        this.name = name;
        this.branches = [];
    }

    addBranch(branch){

        if ( !this.branches.includes(branch)) {
            this.branches.push(branch);
            return true;
        }else{
            return false;
        }
    }  

    addCustomer(branch , customer){
        if ( !this.branch.includes(customer) ){
            this.customers.push(branch);
            return true;
        }else{
            return false;
        }
    }
 // not sure about this >_<
    addCustomerTransaction(branch , customerId ,amount ){
        
        const Transaction = this.Transaction.find(
            customer => customer.id === customerId);

        if (Transaction) {
            Customer.push(branch);
          }  else {
            return false;
          }
    
    }

    // was not clear have the same name as  appove 
    //so i changed it to the old naming
    findBranchByName(branchName ){
       const BranchByName = this.branches.filter(Branch => Branch.name === branchName);
       if(BranchByName){
        return true;
       } else null;
}
  
    checkBranch(branch){
        if (this.name.includes(Branch) ){
            return true;

        } else {
            return false;
        }
    }
    listCustomers(branch,includeTransactions){

    if (transaction){//mop?//
        
    };
    }

}


class Branch{
    constructor(name){
        this.name = name;
        this.customers = [];
    }

    getName(){
        return this.name;
    }

    getCustomers(){
        return this.customers;
    }

    addCustomer(customer){
       
        if ( !this.customers.includes(customer) ){
            this.customers.push(customer);
            return true;
        }else{
            return false;
        }
    
}
    addCustomerTransaction(customerId, amount) {
        const customer = this.customers.find(
            customer => customer.id === customerId);

        if (customer) {
            customer.addTransaction(amount);
          }  else {
            return false;
          }
    }
}


class Customer{
    constructor(name , id){
        this.name = name;
        this.id = id;
        this.transactions = [];
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getTransactions(){
        return this.transactions;
    }
    getBalance(){

        return this.transactions.reduce(
            (total, current) => total + current.amount,0
            );

    }
    addTransactions(amount){

        if (amount < 0){
            console.log('can not be negative');
            return false;
        }
        const transaction = new Transaction(amount , new Date());
        this.transactions.push(transaction);
        return true;
    }
}


class Transaction{
    Constructor (amount ,date){
        this.amount=amount;
        this.date=date;
    }
}