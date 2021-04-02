const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, lastName, id, officeNumber) {
        super(firstName, lastName, id);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        this.icon = 'fas fa-mug';
    };    
    
    getOfficeNumber() {
        return `${this.officeNumber}`;
    }
};

module.exports = Manager;