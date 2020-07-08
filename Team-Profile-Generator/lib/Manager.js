const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return 'Office Number: ' + this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
    getIcon(){
        return '<img src="https://img.icons8.com/metro/26/000000/manager.png"/>'
    }
};

module.exports = Manager;