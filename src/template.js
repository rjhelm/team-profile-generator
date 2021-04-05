const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const nameFormat = require('../utils/name-format'); /* Helps ensure that the name user inputs is inserted in proper format */

const addEmployee = employeeInfo => {
    let teamCards = '';

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

        teamCards += `
        <div class="column is-one-quarter-desktop">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left has-text-link-dark">
                        ${addTeamate.getIcon()}
                    </div>
                    <div class="media-content">
                        <p class="title is-4">${addTeamate.getName()}</p>
                        <p class="subtitle is-6">${addTeamate.getRole()}</p>
                    </div>
                </div>
                <div class="content">
                    <div class="box">${addTeamate.getId()}</div>
                    <div class="box">${addTeamate.getEmail()}</div>
                    <div class="box">${userInfo}</div>
                </div>
            </div>
        </div>
    </div>`  
    });
    return teamCards;
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
        </head>

        <body>

            <section class="hero is-primary is-bold">
                <div class="hero-body has-background-link-dark">
                    <div class="container">
                        <h1 class="title has-text-centered">Dream Team</h1>
                    </div>
                </div>
            </section>

            <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                    ${addEmployee(userTemplate)}
                </div>
            </main>

        </body>

        </html>
    `;
}

module.exports = generate;