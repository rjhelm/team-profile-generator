const Employee = require('../lib/Employee');

test('Initiate an employee insatnce', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object'); 
});