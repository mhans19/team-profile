const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Bob', "111", "test@gmail.com", "Manager", "999");

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe("111");
    expect(manager.email).toBe("test@gmail.com");
    expect(manager.role).toBe("Manager");
    expect(manager.officeNumber).toBe("999");
    expect(manager.getName()).toBe('Bob');
    expect(manager.getId()).toBe('Identification Number: 111');
    expect(manager.getEmail()).toBe("<a class = 'text-white' href='mailto:>test@gmail.com'>Email Bob</a>");
    expect(manager.getRole()).toBe('Manager');
});