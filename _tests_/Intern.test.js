const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Bob', "111", "test@gmail.com", "Intern", "MSU");

    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe("111");
    expect(intern.email).toBe("test@gmail.com");
    expect(intern.role).toBe("Intern");
    expect(intern.school).toBe("MSU");
    expect(intern.getName()).toBe('Bob');
    expect(intern.getId()).toBe('Identification Number: 111');
    expect(intern.getEmail()).toBe("<a class = 'text-white' href='mailto:>test@gmail.com'>Email Bob</a>");
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe("MSU");
});