const {generatePage, managerCard, employeeCard, generateFinal} = require("./src/page-template.js");
const inquirer = require('inquirer');

// Questions for Manager
const managerInput = () => {
    return inquirer.prompt([
        {// Prompt for manager name
            type: 'input',
            name: 'mngName',
            message: "What is your name? (Required)",
            validate: mngName => {
                if (mngName) {
                return true;
                } else {
                console.log('Please enter your name!');
                return false;
                }
            }
        },
        { // Prompt for manager ID number
            type: 'input',
            name: 'mngId',
            message: 'What is your ID number? (Required)',
            validate: mngId => {
                if (mngId) {
                return true;
                } else {
                console.log('Please enter your ID!');
                return false;
                }
            }
        },
        {// Prompt for manager email
            type: 'input',
            name: 'mngEmail',
            message: "What is your email? (Required)",
            validate: mngEmail => {
                if (mngEmail) {
                return true;
                } else {
                console.log('Please enter your email!');
                return false;
                }
            }
        },
        { // Prompt for manager Office Number
            type: 'input',
            name: 'mngOffice',
            message: 'What is your office number? (Required)',
            validate: mngOffice => {
                if (mngOffice) {
                return true;
                } else {
                console.log('Please enter your office number');
                return false;
                }
            }
        },
        { // Prompt to build team
            type: 'confirm',
            name: 'newEmployee',
            message: "Let's build your team!"
        }
    ]);    
}       

// Question prompts for user input   
const employeeInput = () => {
    return inquirer.prompt([
        { // Prompt for more team members
            type: 'list',
            name: 'employeeRole',
            message: 'Who would you like to add to your team?',
            choices: ["Engineer", "Intern"],
            validate: employeePrompt => {
                if (employeePrompt) {
                    return true; 
                } else {
                    console.log('Please make a selection!');
                    return false;
                }
            }
        },
        {// Prompt for name
            type: 'input',
            name: 'name',
            message: "What is the team member's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter a name!');
                return false;
                }
            }
        },
        { // Prompt for ID number
            type: 'input',
            name: 'idInput',
            message: 'What is their ID number? (Required)',
            validate: idInput => {
                if (idInput) {
                return true;
                } else {
                console.log('Please enter an ID!');
                return false;
                }
            }
        },
        { // Prompt for Email
            type: 'input',
            name: 'emailInput',
            message: 'What is their email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('Please enter an email!');
                return false;
                }
            }
        },
        { // Additional Prompt for Engineer - GitHub
            type: 'input',
            name: 'githubInput',
            message: 'What is their GitHub username? (Required)',
            when: function(responses) {
                return responses.employeeRole === "Engineer";
            },
            validate: githubInput => {
                if (githubInput) {
                return true;
                } else {
                console.log('Please enter a GitHub Username!');
                return false;
                }
            }
        },
        { // Additional Prompt for Intern - School
            type: 'input',
            name: 'schoolInput',
            message: 'Where do they go to school? (Required)',
            when: function(responses) {
                return responses.employeeRole === "Intern";
            },
            validate: schoolInput => {
                if (schoolInput) {
                return true;
                } else {
                console.log('Please enter a school!');
                return false;
                }
            }
        },
        { // Prompt for more employees
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
}

console.log(`
======================
Let's build your team!
======================
`);
// Prompt Manager
managerInput()
.then(managerData => {
    generatePage();
    managerCard(managerData);
})
.then(employeeInput)
.then(employeeData => {
    employeeCard(employeeData);
    loop(employeeData);
});

const loop = (data) => {
    if (data.addEmployee) {
        employeeInput()
        .then(data => {
            employeeCard(data);
            loop(data);
        });
    } else {
        generateFinal();
        console.log("Your team HTML file was created! Navigate to the 'dist' folder to locate.")
        return;
    }
}