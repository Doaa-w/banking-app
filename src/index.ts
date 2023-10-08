import { type } from "os";

class Transaction{
     amount: number; 
      date: Date;
    constructor( amount:number, data:Date){
        this.amount = amount;
        this.date = new Date();
    }
}

class Customer{
    name:string;
    id:number;
    transactions:Transaction[];
    constructor(name:string , id:number){
        this.name = name;
        this.id = id;
        this.transactions = [];
    }

    getName():string{
        return this.name;
    }

    getId():number{
        return this.id;
    }

    getTransactions() :Transaction[] {
        return this.transactions;
    }
    getBalance():number{
        
        return this.transactions.reduce(
            (total, current):number => total+current.amount ,0);

    }
    addTransaction(amount:number){
      
        if (amount < 0){
            console.log('can not be negative');
    return false; 
        }else{ 
          amount:Number;
          date:Date;
    let transaction= new Transaction (amount,new  Date());
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
            customer => customer.getId() === customerId);

        if (customer) {
           return  customer.addTransaction(amount);
          }  else 
           return false;
          }
        }

    class Bank {
    name:String; 
    branches:Branch[];
    constructor(name:String ){
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

    addCustomer(branch:Branch , customer:Customer):Branch|Customer|boolean {
        if (!this.branches.includes(branch) ){
          return  this.addCustomer.push(customer);
          }
            return false;
        
    }

    addCustomerTransaction(branch:Branch , customerId:number ,amount:number ){
            if (this.branches.includes(branch)) {
              return branch.addCustomerTransaction(customerId, amount);
            }
            return false;
          }
    
    
   
    findBranchByName(branchName:string ):Branch| null{

      
       return this.branches.find((branch) => branch.name === branchName)||null;
        
       }

  
    checkBranch(Branch:Branch ) :boolean {

        if (this.branches.includes(Branch)){
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

