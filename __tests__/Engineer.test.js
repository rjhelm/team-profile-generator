const Engineer = require('../lib/Engineer');
const { expectToBe, expectNumber, expectString } = require('../utils/expect');

const engineer = new Engineer('John', 'James', 1, 'jjcoding');

test('Create an engineer as object', () => {
    expectToBe(engineer.firstName, 'John');
    expectToBe(engineer.lastName, 'James');
    expectNumber(engineer.id);
    expectString(engineer.email, '@');
    expectToBe(engineer.role, 'Engineer');
 });

 test("Get engineer's name", () => {
    expectString(engineer.getName(), `${engineer.firstName} ${engineer.lastName}`);
});

test("Get engineer's ID", () => {
    expectString(engineer.getId(), `${engineer.id}`);
});

test("Get engineer's email", () => {
    expectString(engineer.getEmail(), engineer.email);
});

test("Get engineer's role", () => {
    expectString(engineer.getRole(), engineer.role);
});

test("Gets engineer's github", () => {
    expectString(engineer.getGithub(), engineer.github);
});
