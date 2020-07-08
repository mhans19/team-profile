const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const fs = require('fs');

const generatePage = (managerData) => {
    const{ teamName } = managerData;

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
            <h1 class = "text-center text-white bg-secondary font-weight-bolder text-uppercase">${managerData.teamName}</h1>
        </header>
        <!-- End Header -->
        <!-- Begin Team Cards -->
        <div class = "container-fluid">
            <div class = "row justify-content-md-center">`,
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
                <div class = "col">
                    <div class="card my-2">
                        <div class="card-body">
                            <h3 class="card-title text-center font-weight-bolder text-uppercase text-info">${manager.getName()}</h3>
                            <h4 class="card-subtitle mb-2 text-center font-weight-bold text-info">
                                ${manager.getRole()}
                                ${manager.getIcon()}
                            </h4>
                            <h6 class = "card-body border border-secondary text-center font-weight-bold rounded bg-info text-white">${manager.getId()}</h6>
                            <h6 class = "card-body border border-secondary text-center font-weight-bold rounded bg-info text-white">${manager.getEmail()}</h6>
                            <h6 class = "card-body border border-secondary text-center font-weight-bold rounded bg-info text-white">${manager.getOfficeNumber()}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "row justify-content-md-center">`,        
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
                <div class = "col-md-6 col-lg-4">
                    <div class="card my-2">
                        <div class="card-body">
                            <h3 class="card-title text-info text-center font-weight-bolder text-uppercase">${employee.getName()}</h3>
                            <h4 class="card-subtitle text-info mb-2 text-center font-weight-bold">
                                ${employee.getRole()}
                                ${employee.getIcon()}
                            </h4>
                            <h6 class = "card-body border border-secondary text-center font-weight-bold rounded bg-info text-white">${employee.getId()}</h6>
                            <h6 class = "card-body border border-secondary text-center font-weight-bold rounded bg-info text-white">${employee.getEmail()}</h6>
                            <h6 class = "card-body border border-secondary text-center font-weight-bold rounded bg-info text-white">${employee.getExtraFeature()}</h6>
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