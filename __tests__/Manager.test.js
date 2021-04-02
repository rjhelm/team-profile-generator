const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');
const { expectToBe, expectNumber, expectString } = require('../utils/expect');

const manager = new Manager('John', 'James', 1, 555);

test('Creates manager as an object', () => {
    expectToBe(manager.firstName, 'John');
    expectToBe(manager.lastName, 'James');
    expectNumber(manager.id);
    expectString(manager.email, '@');
    expectToBe(manager.role, 'Manager');
    expectNumber(manager.officeNumber);
    expectToBe(manager.icon, 'fas fa-mug');
});

test("Get manager's name", () => {
    expectString(manager.getName(), `${manager.firstName} ${manager.lastName}`);
});

test("Get manager's id", () => {
    expectString(manager.getId(), `${manager.id}`);
});

test("Get manager's email", () => {
    expectString(manager.getEmail(), manager.email);
});

test("Get manager's role", () => {
    expectString(manager.getRole(), manager.role);
});

test("Get manager's office number", () => {
    expectString(manager.getOfficeNumber(), `${manager.officeNumber}`);
});

test("Get manager's icon", () => {
    expectString(manager.getIcon(), manager.icon);
});