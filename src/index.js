"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.prototype.Constructor = function (amount, data) {
        this.amount = amount;
        this.date = new Date();
    };
    return Transaction;
}());
var Customer = /** @class */ (function () {
    function Customer(name, id) {
        this.name = name;
        this.id = id;
        this.transactions = [];
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getId = function () {
        return this.id;
    };
    Customer.prototype.getTransactions = function () {
        return this.transactions;
    };
    Customer.prototype.getBalance = function () {
        return this.transactions.reduce(function (total, current) { return total + current.amount; }, 0);
    };
    Customer.prototype.addTransaction = function (amount) {
        if (amount < 0) {
            console.log('can not be negative');
            return false;
        }
        else {
            amount: Number;
            date: Date;
            var transaction = new Transaction(amount, new data());
            this.transactions.push(transaction);
            return true;
        }
    };
    return Customer;
}());
var Branch = /** @class */ (function () {
    function Branch(name) {
        this.name = name;
        this.customers = [];
    }
    Branch.prototype.getName = function () {
        return this.name;
    };
    Branch.prototype.getCustomers = function () {
        return this.customers;
    };
    Branch.prototype.addCustomer = function (customer) {
        if (!this.customers.includes(customer)) {
            this.customers.push(customer);
            return true;
        }
        else {
            return false;
        }
    };
    Branch.prototype.addCustomerTransaction = function (customerId, amount) {
        var customer = this.customers.find(function (customer) { return customer.getId() === customerId; });
        if (customer) {
            return customer.addTransaction(amount);
        }
        else
            return false;
    };
    return Branch;
}());
var Bank = /** @class */ (function () {
    function Bank(name) {
        this.name = name;
        this.branches = [];
    }
    Bank.prototype.addBranch = function (branch) {
        if (!this.branches.includes(branch)) {
            this.branches.push(branch);
            return true;
        }
        return false;
    };
    Bank.prototype.addCustomer = function (branch, customer) {
        if (!this.branches.includes(branch)) {
            return this.addCustomer.push(customer);
        }
        return false;
    };
    Bank.prototype.addCustomerTransaction = function (branch, customerId, amount) {
        if (this.branches.includes(branch)) {
            return branch.addCustomerTransaction(customerId, amount);
        }
        return false;
    };
    Bank.prototype.findBranchByName = function (branchName) {
        return this.branches.find(function (branch) { return branch.name === branchName; }) || null;
    };
    Bank.prototype.checkBranch = function (Branch) {
        if (this.Branch.includes(Branch)) {
            return true;
        }
        else {
            return false;
        }
    };
    Bank.prototype.listCustomers = function (Branch, Transactions) {
        if (this.branches.includes(Branch)) {
            var Customers = Branch.getCustomers();
            console.log("Customers of ".concat(Branch.name, ":"));
            Customers.forEach(function (customer) {
                console.log("Customer: ".concat(customer.name));
                if (Transaction) {
                    console.log("Transactions: ".concat(JSON.stringify(customer.getTransactions())));
                }
            });
        }
        else {
            console.log("Branch '".concat(Branch.name, "' not found."));
        }
    };
    return Bank;
}());
