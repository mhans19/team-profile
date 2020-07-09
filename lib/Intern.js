const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern'
    }
    getExtraFeature(){
        return 'School Name: ' + this.getSchool()
    }
    getIcon(){
        return '<img src="https://img.icons8.com/metro/26/000000/student-male.png"/>'
    }
};

module.exports = Intern;