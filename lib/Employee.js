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
        return 'Identification Number: ' + this.id;
    }
    getEmail(){
        return "<a class = 'text-white' href='mailto:>" + this.email + "'>Email " + this.name + "</a>";
    }
}

module.exports = Employee;
