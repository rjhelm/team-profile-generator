const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const nameFormat = require('../utils/name-format'); /* Helps ensure that the name user inputs is inserted in proper format */

const addEmployee = employeeInfo => {
    let cards = '';

    employeeInfo.forEach(employee => {
        const { firstName, lastName, id, role } = employee;
        let addTeamate = '';
        let userInfo = '';

        switch(role) {
            case 'Manager': 
                addTeamate = new Manager(nameFormat(firstName), nameFormat(lastName), id, employee.officeNumber);
                userInfo = addTeamate.getOfficeNumber();
                break;
            case 'Engineer':
                addTeamate = new Engineer(nameFormat(firstName), nameFormat(lastName), id, employee.github);
                userInfo = addTeamate.getGithub();
                break;
            case 'Intern':
                addTeamate = new Intern(nameFormat(firstName), nameFormat(lastName), id, employee.school);
                userInfo = addTeamate.getSchool();
                break;
            default:
                addTeamate = new Employee(nameFormat(firstName), nameFormat(lastName), id);
        };

        cards += `
            <div class="card team-card mr-4 ml-4 mb-3">
                <div class="card-body">
                    <div class="card-header text-center">
                        <h2 class="card-title">${addTeamate.getName()}</h2>
                        <h3 class="-title">${addTeamate.getRole()}</h3>
                    </div>
                
                    <div class="list-group">
                        <li class="list-group-item">${addTeamate.getId()}<br />
                            ${addTeamate.getEmail()}<br />
                         ${userInfo}</li>
                    </div>
                </div>
            </div>`
    });
    return cards;
};

const generate = userTemplate => {
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team Profile</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
                <link href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link rel="stylesheet" href="./utils/style.css">
        </head>

        <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container"
            <div class="row">
                <div class="col-12 d-flex justify-content-center mt-5">
                    ${addEmployee(userTemplate)}
                </div>
            </div>
        </div>    
        </body>
        </html>
    `;
}

module.exports = generate;