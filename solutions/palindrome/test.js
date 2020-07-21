const palindrome = require('./index');

test('palindrome should be defined', () => {
    expect(typeof palindrome).toEqual('function');
});


test('"abba" is a palindrome', () => {
    expect(palindrome('abba')).toBeTruthy();
});

test('" abba" is not a palindrome', () => {
    expect(palindrome(' abba')).toBeFalsy();
});

test('"deleveled" is a palindrome', () => {
    expect(palindrome('deleveled')).toBeTruthy();
});

test('"racecar" is a palindrome', () => {
    expect(palindrome('racecar')).toBeTruthy();
});

test('"hello hello" is not a palindrome', () => {
    expect(palindrome('hello hello')).toBeFalsy();
});

test('"Hello olleh" is not a palindrome', () => {
    expect(palindrome('Hello olleh')).toBeFalsy();
});

test('"Hello olleH" is a palindrome', () => {
    expect(palindrome('Hello olleH')).toBeTruthy();
});