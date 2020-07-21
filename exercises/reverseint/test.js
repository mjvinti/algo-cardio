const reverseInt = require('./index');

test('reverseInt function should exist', () => {
    expect(reverseInt).toBeDefined();
});

test('reverseInt should handle 0', () => {
    expect(reverseInt(0)).toEqual(0);
});

test('reverseInt should handle positive numbers', () => {
    expect(reverseInt(1)).toEqual(1);
    expect(reverseInt(23)).toEqual(32);
    expect(reverseInt(30)).toEqual(3);
    expect(reverseInt(8675309)).toEqual(9035768);
});

test('reverseInt should handle negative numbers', () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
});