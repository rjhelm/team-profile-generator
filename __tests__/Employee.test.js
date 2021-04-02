
const Employee = require('../lib/Employee');
// const { expectToBe, expectStr, expectNum } = require('../utils/expect');
const employee = new Employee('John', 'James', 1);

test('Create an epmloyee as object', () => {
   expectToBe(employee.firstName, 'John');
   expectToBe(employee.lastName, 'James');
   expectNum(employee.id);
   expectStr(employee.email, '@');
   expectToBe(employee.role, 'Employee');
   expectToBe(employee.icon, 'fas fa-briefcase');  
});

