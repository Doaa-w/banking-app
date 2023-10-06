
class Bank {
    
    constructor(name){
        this.name = name;
        this.branches = [];
    }

    addBranch(branch){

        if( !this.branches.includes(branch)) {
            this.branches.push(branch);
            return true;
        }
            return false;
        
    }  

    addCustomer(branch , customer){
        if (!this.branches.includes(branch) ){
          return  this.addCustomer.push(customer);
          }
            return false;
        
    }

    addCustomerTransaction(branch , customerId ,amount ){
        
            if (this.branches.includes(branch)) {
              return branch.addCustomerTransaction(customerId, amount);
            }
            return false;
          }
    
    
   
    findBranchByName(branchName ){
       const BranchByName = this.branches.find((branch) => branch.length > 0)
        
       }

  
    checkBranch(branch){
        if (this.name.includes(Branch) ){
            return true;

        } else {
            return false;
        }
    }
    listCustomers(branch,includeTransactions){

        if (this.branches.includes(branch)) {
            const customers = branch.getCustomers();
            console.log(`Customers of ${branch.name}:`);
            customers.forEach((customer) => {
              console.log(`Customer: ${customer.name}`);
              if (includeTransactions) {
                console.log(`Transactions: ${JSON.stringify(customer.getTransactions())}`);
              }
            });
          } else {
            console.log(`Branch '${branch.name}' not found.`);
          }

}}


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
            customer => customer.getId === customerId);

        if (customer) {
           return  customer.addTransaction(amount);
          }  else 
            false;
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
    addTransaction(amount){

        if (amount >= 0){
        let transaction = new Transaction(amount , new Date());
        this.transactions.push(transaction);
        return true;
    } 
    return false; 
    console.log('can not be negative')
 }
}



class Transaction{
    Constructor (amount ,date){
        this.amount = amount;
        this.date = new Date();
    }
}


const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John", 1)
const customer2 = new Customer("Anna", 2)
const customer3 = new Customer("John", 3)

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000)

customer1.addTransaction(-1000)
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch,true))