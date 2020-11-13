const twoSum = require('./index');

test('twoSum function should exist', () => {
    expect(twoSum).toBeDefined();
});

test('twoSum returns indices [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
  
test('twoSum returns indices [1, 2]', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('twoSum returns indices [0, 1]', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test('twoSum returns indices [0, 2]', () => {
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
});

test('twoSum returns indices [3, 5]', () => {
    expect(twoSum([1, 2, 3, 20, 4, 5, 15], 25)).toEqual([3, 5]);
});