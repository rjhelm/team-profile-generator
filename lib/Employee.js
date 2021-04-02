Employee = function(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = `${firstName}.${lastName}@company.com`;
    this.role = 'Employee';
    this.icon = 'fas fa-briefcase';
};

module.exports = Employee;