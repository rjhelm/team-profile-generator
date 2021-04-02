
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
