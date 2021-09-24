const functions = require('./functions');

// #1
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// #2 toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// #3 toBeFalsy
test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// #4 toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    });
});

// #4 Less than or greater than
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// #5 Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// #6 Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
