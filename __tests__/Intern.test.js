const Intern = require('../lib/Intern');
const { expectToBe, expectNumber, expectString } = require('../utils/expect');

const intern = new Intern('John', 'James', 1, 'Utah');

test('Create an intern as object', () => {
    expectToBe(intern.firstName, 'John');
    expectToBe(intern.lastName, 'James');
    expectNumber(intern.id);
    expectString(intern.email, '@');
    expectToBe(intern.role, 'Intern')
    expectToBe(intern.school, 'Utah');
    expectToBe(intern.icon, 'fas fa-graduation-cap');  
 });

 test("Get intern's name", () => {
    expectString(intern.getName(), `${intern.firstName} ${intern.lastName}`);
});

test("Get intern's ID", () => {
    expectString(intern.getId(), `${intern.id}`);
});

test("Get intern's email", () => {
    expectString(intern.getEmail(), intern.email);
});

test("Get intern's role", () => {
    expectString(intern.getRole(), intern.role);
});

test("Gets intern's school", () => {
    expectString(intern.getSchool(), intern.school);
});

test("Get intern's icon", () => {
    expectString(intern.getIcon(), intern.icon);
});