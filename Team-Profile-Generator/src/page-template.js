const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const fs = require('fs');

const generatePage = () => {
    fs.writeFile('./dist/my-team.html', 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <title>My Team</title>
    </head>
    <body>
        <!-- Begin Header -->
        <header>
            <h1 class = "text-center text-white bg-dark">My Team</h1>
        </header>
        <!-- End Header -->
        <!-- Begin Team Cards -->
        <div class = "container-fluid">
            <div class = "row" id = "employee-cards">`,
    err => {
        if (err) {console.log(err);}
    })
}
    
const managerCard = managerData => {
    const{ mngName, mngId, mngEmail, mngOffice} = managerData;
    let manager = new Manager(mngName, mngId, mngEmail, "Manager", mngOffice);
    
    // Append HTML Card
    fs.appendFile(
        "./dist/my-team.html",
                `
                <div class = "col-12 col-md-9">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h3 class="card-title text-center">${manager.getName()}</h3>
                            <h4 class="card-subtitle mb-2 text-center">
                                ${manager.getRole()}
                                ${manager.getIcon()}
                            </h4>
                            <h6 class = "card-body border">${manager.getId()}</h6>
                            <h6 class = "card-body border">${manager.getEmail()}</h6>
                            <h6 class = "card-body border">${manager.getOfficeNumber()}</h6>
                        </div>
                    </div>
                </div>`,
        err => {
            if (err) {console.log(err);}
        }
    );
};


const employeeCard = employeeData => {
    const{ employeeRole, name, idInput, emailInput, githubInput, schoolInput} = employeeData;
    let employee = "";
    if (employeeRole === "Engineer"){
        employee = new Engineer(name, idInput, emailInput, employeeRole, githubInput);
    } else if(employeeRole === "Intern"){
        employee = new Intern(name, idInput, emailInput, employeeRole, schoolInput);
    }
    // Append HTML Card
    fs.appendFile(
        "./dist/my-team.html",
                `
                <div class = "col-12 col-md-9">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h3 class="card-title text-center">${employee.getName()}</h3>
                            <h4 class="card-subtitle mb-2 text-center">
                                ${employee.getRole()}
                                ${employee.getIcon()}
                            </h4>
                            <h6 class = "card-body border">${employee.getId()}</h6>
                            <h6 class = "card-body border">${employee.getEmail()}</h6>
                            <h6 class = "card-body border">${employee.getExtraFeature()}</h6>
                        </div>
                    </div>
                </div>`,
        err => {
            if (err) {console.log(err);}
        }
    );
};

const generateFinal = () => {
    fs.appendFile('./dist/my-team.html', 
            `
            </div>
        </div>
    <!-- End Team Cards -->
    </body>
</html>`,
    err => {
        if (err) {console.log(err);}
    })
}

module.exports = {generatePage, managerCard, employeeCard, generateFinal};