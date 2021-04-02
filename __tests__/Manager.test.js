const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const { expectToBe, expectNumber, expectString } = require('../utils/expect');

const manager = new Manager('John', 'James', 1, 1);

test('Creates manager as an object', () => {
    expectToBe(manager.firstName, 'John');
    expectToBe(manager.lastName, 'James');
    expectNumber(manager.id);
    expectString(manager.email, '@');
    expectToBe(manager.role, 'Manager');
    expectNumber(manager.officeNumber);
    expectToBe(manager.icon, 'fas fa-mug');
});