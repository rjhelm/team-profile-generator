class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `${firstName}.${lastName}@company.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-briefcase';
    };    

    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getId() {
        return `${this.id}`;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };

    getIcon() {
        return this.icon;
    };
};

module.exports = Employee;