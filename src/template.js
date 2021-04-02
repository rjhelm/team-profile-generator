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
                userInfo = addTeamate.officeNumber();
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
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">${addTeamate.getName()}</p>
                                <p class="subtitle is-6">${addTeanate.getRole()}</p>
                            </div>
                        </div>

                        <div class="content">
                            <p>${newEmployee.getId()}<br />
                            ${newEmployee.getEmail()}<br />
                            ${extraInfo}</p>
                        </div>
                    </div>
                </div>
            </div>`
    });
    return cards;
}