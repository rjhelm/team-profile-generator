const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/template');
const yourTeam = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: [] 
    },
    {
        type: 'input',
        name: 'firstName',
        message: ''
        
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