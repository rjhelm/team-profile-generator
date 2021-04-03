const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./src/template');
const nameFormat = require('./utils/name-format');
const allEmployees = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: () => {
            if (allEmployees.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        name: 'firstName',
        message: ({ role }) => `What is the ${role.toLowerCase()}'s first name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter this employee's first name!");
                return false;
            }
        }
        
    },
    {
        type: 'input',
        name: 'lastName',
        message: ({ firstName }) => `What is ${nameFormat(firstName)}'s last name?`,
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter employee's last name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: ({ firstName }) => `What is ${nameFormat(firstName)}'s employee ID number?`,
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log("Please enter this employee's valid ID number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: ({ firstName }) => `What is ${nameFormat(firstName)}'s office phone number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log("Please enter this employee's valid office phone number!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: ({ firstName }) => `What is ${nameFormat(firstName)}'s Github username?`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter a valid Github username for this employee!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: ''
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee to your team?',
        default: true
    }

]