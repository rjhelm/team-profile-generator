
const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const { expectToBe, expectNumber, expectString } = require('../utils/expect');
const employee = new Employee('John', 'James', 1);

test('Create an epmloyee as object', () => {
   expectToBe(employee.firstName, 'John');
   expectToBe(employee.lastName, 'James');
   expectNumber(employee.id);
   expectString(employee.email, '@');
   expectToBe(employee.role, 'Employee');
   expectToBe(employee.icon, 'fas fa-briefcase');  
});

test("Get employee's name", () => {
    expectString(employee.getName(), `${employee.firstName} ${employee.lastName}`);
});

test("Get employee's ID", () => {
    expectString(employee.getId(), `${employee.id}`);
});

test("Get employee's email", () => {
    expectString(employee.getEmail(), employee.email);
});

test("Get employee's role", () => {
    expectString(employee.getRole(), employee.role);
});

test("Get employee's icon", () => {
    expectString(employee.getIcon(), employee.icon);
});