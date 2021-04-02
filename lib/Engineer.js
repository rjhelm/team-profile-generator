const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(firstName, lastName, id, github) {
        super(firstName, lastName, id);
        this.github = github;
        this.role = 'Engineer';
        this.icon = 'fas fa-glasses';
    };

    getGithub() {
        return `${this.github}`;
    };
};

module.exports = Engineer;
