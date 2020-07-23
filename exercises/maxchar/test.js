const maxChar = require('./index');

test('maxChar function exists', () => {
    expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
    expect(maxChar('z')).toEqual('z');
    expect(maxChar('abcdefaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
    expect(maxChar('a11b11c11d11e11f11')).toEqual('1');
});