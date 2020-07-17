const reverse = require('./index');

test('reverse function should exist', () => {
    expect(reverse).toBeDefined();
});

test('reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
});
  
test('reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
});

test('reverse reverses a string', () => {
    expect(reverse('Hello there!')).toEqual('!ereht olleH');
});