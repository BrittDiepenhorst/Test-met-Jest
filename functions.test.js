const functions = require('./functions');

// // #1
// test('Adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2, 2)).toBe(4);
// });

// test('Adds 2 + 2 to NOT equal 5', () => {
//     expect(functions.add(2, 2)).not.toBe(5);
// });

// // #2 
// test('Should be null', () => {
//     expect(functions.isNull()).toBeNull();
// });

// // #3
// test('checkValue Should be falsy when argument is undefined', () => {
//     expect(functions.checkValue).toBeTruthy();
// });

// // #4 FAIL!! 
// test('User should be Brad Traversy object', () => {
//     expect(functions.createUser).objectContaining({ firstName: 'Brad' });
// });

// // #4 Less than or greater than
// test('Should be under or equal to 1600', () => {
//     const load1 = 800;
//     const load2 = 800;
//     expect(load1 + load2).toBe(1600);
// });

// // #5 Regex
// test('There is no I in team', () => {
//     expect('team').not.toBe('I');
// });

// #6 Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
