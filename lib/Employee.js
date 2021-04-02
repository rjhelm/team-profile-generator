Employee = function(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = `${firstName}.${lastName}@company.com`;
    this.role = 'Employee';
    this.icon = 'fas fa-briefcase';
};

Employee.prototype.getName = function(firstName, lastName) {
    return `${this.firstName} ${this.lastName}`;
};

Employee.prototype.getId = function() {
    return `${this.id}`;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.getRole = function() {
    return this.role;
};

Employee.prototype.getIcon = function() {
    return this.icon;
};

module.exports = Employee;