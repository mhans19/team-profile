const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer'
    }
    getExtraFeature(){
        return 'GitHub: ' + this.getGithub()
    }
    getIcon(){
        return '<img src="https://img.icons8.com/ios-glyphs/30/000000/engineer.png"/>'
    }
};

module.exports = Engineer;