
class Transaction{
     amount:Number; 
      date:Date;
    Constructor( amount:Number , date:Date ){
        this.amount = amount;
        this.date = new Date();
    }
}

class Customer{
    name:String;
    id:number;
    transactions:Transaction[];
    constructor(name:string , id:number){
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
            (total, current) => total + current.amount ,0);

    }
    addTransaction(amount:number){
      
        amount:Number;
         Date:Date;
        if (amount < 0){
            console.log('can not be negative');
    return false; 
        }else{ 
    const transaction = new Transaction (amount ,new data());
    this.transactions.push(transaction);
    return true;
 }
}
}

class Branch{
    name:String; 
    customers:Customer[];
    constructor(name:String){
        this.name = name;
        this.customers = [];
    }

    getName(){
        return this.name;
    }

    getCustomers(){
        return this.customers;
    }

    addCustomer(customer:Customer){
        if ( !this.customers.includes(customer)){
            this.customers.push(customer);
            return true;
        }else{
            return false;
        }
    
}
    addCustomerTransaction(customerId :number, amount:number) {
        const customer = this.customers.find(
            customer => customer.getId === customerId);

        if (customer) {
           return  customer.addTransaction(amount);
          }  else 
            false;
          }
        }

    class Bank {
    name:String; 
    branches:Branch[];
    constructor(name:String){
        this.name = name;
        this.branches = [];
    }

    addBranch(branch:Branch){

        if( !this.branches.includes(branch)) {
            this.branches.push(branch);
            return true;
        }
            return false;
        
    }  

    addCustomer(branch:Branch , customer:Customer){
        if (!this.branches.includes(branch) ){
          return  this.addCustomer.push(customer);
          }
            return false;
        
    }

    addCustomerTransaction(branch:Branch , customerId:Number ,amount:Number ){
            if (this.branches.includes(branch)) {
              return branch.addCustomerTransaction(customerId, amount);
            }
            return false;
          }
    
    
   
    findBranchByName(branchName:Branch ){

       const BranchByName = this.branches.find((branch) => branch.length > 0)
        
       }

  
    checkBranch(Branch:Branch ) {
        Branch:Branch;

        if (this.name.includes(Branch) ){
            return true;
        } else {
            return false;
        }
    }
    listCustomers(Branch:Branch,Transactions:Transaction){
   
        if (this.branches.includes(Branch)) {
            const Customers= Branch.getCustomers();
            console.log(`Customers of ${Branch.name}:`);
            Customers.forEach((customer) => {
              console.log(`Customer: ${customer.name}`);
              if (Transaction) {
                console.log(`Transactions: ${JSON.stringify(customer.getTransactions())}`);
              }
            });
          } else {
            console.log(`Branch '${Branch.name}' not found.`);
          }

}
}