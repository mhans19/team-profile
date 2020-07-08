class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getId(){
        return 'ID: ' + this.id;
    }
    getEmail(){
        return 'Email: ' + this.email;
    }
}

module.exports = Employee;
