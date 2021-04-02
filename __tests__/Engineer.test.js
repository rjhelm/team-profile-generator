const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const { expectToBe, expectNumber, expectString } = require('../utils/expect');

const engineer = new Engineer('John', 'James', 1, 'jjcoding');

test('Create an engineer as object', () => {
    expectToBe(engineer.firstName, 'John');
    expectToBe(engineer.lastName, 'James');
    expectNumber(engineer.id);
    expectString(engineer.email, '@');
    expectToBe(engineer.role, 'Employee');
    expectToBe(engineer.icon, 'fas fa-glasses');  
 });

 