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
        message: ''
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: ''
    },
    {
        type: 'input',
        name: 'github',
        message: ''
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