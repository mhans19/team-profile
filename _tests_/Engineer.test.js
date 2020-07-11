const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Bob', "111", "test@gmail.com", "Engineer", "test123");

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe("111");
    expect(engineer.email).toBe("test@gmail.com");
    expect(engineer.role).toBe("Engineer");
    expect(engineer.github).toBe("test123");
    expect(engineer.getName()).toBe('Bob');
    expect(engineer.getId()).toBe('Identification Number: 111');
    expect(engineer.getEmail()).toBe("<a class = 'text-white' href='mailto:>test@gmail.com'>Email Bob</a>");
    expect(engineer.getGithub()).toBe("<a class = 'text-white' target='_blank' href='https://github.com/test123?tab=repositories'>GitHub: test123</a>");
    expect(engineer.getRole()).toBe('Engineer');
});