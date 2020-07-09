// Load Modules and Packages
const {generatePage, managerCard, employeeCard, generateFinal} = require("./src/page-template.js");
const inquirer = require('inquirer');
// Prompt Questions for Manager
const managerInput = () => {
    return inquirer.prompt([
        { // Prompt for team name
            type: 'input',
            name: 'teamName',
            message: 'What is your team name?',
            validate: teamName => {
                if (teamName) {
                    return true; 
                } else {
                    console.log('Please enter your team name!');
                    return false;
                }
            }
        },
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
            type: 'list',
            name: 'newEmployee',
            message: "Would you like to build your team?",
            choices: ["Yes, let's add a member!", "No thanks, I'm done!"]
        }
    ]);    
}       
// Question prompts for employee input   
const employeeInput = () => {
    return inquirer.prompt([
        { // Prompt for more team members
            type: 'list',
            name: 'employeeRole',
            message: 'Would you like to build your team?',
            choices: ["Engineer", "Intern"],
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
        { // Prompt to build team
            type: 'list',
            name: 'addEmployee',
            message: "Would you like to add another team member?",
            choices: ["Yes, let's add a member!", "No thanks, I'm done!"]
        }
    ])
};
// Run application
console.log(`
======================
Let's build your team!
======================
`);
managerInput() // Prompt Manager
.then(managerData => {
    generatePage(managerData); // Start HTML
    managerCard(managerData); // Add Manager Card
    if (managerData.newEmployee === "Yes, let's add a member!"){
        employeeInput() // Prompt Employee
        .then(employeeData => {
            employeeCard(employeeData); // Add Employee Card
            loop(employeeData); // Loop through prompts until user done building team
        });
    } else if (managerData.newEmployee === "No thanks, I'm done!") {
        generateFinal(); // Finish HTML
        console.log(`
==================================================================
You've finished building your team!
An HTML file was created! Navigate to the 'dist' folder to locate.
==================================================================
        `);
        return;
    };
});
// Function for loop - Allowing for as many employees as wanted on a team.
const loop = (data) => {
    if (data.addEmployee === "Yes, let's add a member!") {
        employeeInput() // Prompt employee
        .then(data => {
            employeeCard(data); // Add Employee Card
            loop(data); // Send back to top of loop until user is done building team.
        });
    } else {
        generateFinal(); // Finish HTML
        console.log(`
==================================================================
You've finished building your team!
An HTML file was created! Navigate to the 'dist' folder to locate.
==================================================================
        `);
        return;
    }
};