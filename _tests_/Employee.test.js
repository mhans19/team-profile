const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bob', "111", "test@gmail.com", "Intern");

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe("111");
    expect(employee.email).toBe("test@gmail.com");
    expect(employee.role).toBe("Intern");
    expect(employee.getName()).toBe('Bob');
    expect(employee.getId()).toBe('Identification Number: 111');
    expect(employee.getEmail()).toBe("<a class = 'text-white' href='mailto:>test@gmail.com'>Email Bob</a>");
    expect(employee.getRole()).toBe('Intern');
});