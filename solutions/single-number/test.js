const singleNumber = require('./index');

test('singleNumber function should exist', () => {
    expect(singleNumber).toBeDefined();
});

[[[4, 1, 2, 1, 2], 4], [[2, 2, 1], 1], [[1], 1], [[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1], 1], [[652342], 652342], [[-5], -5], [[-64, -64, -4], -4], [[-64, -64, 4], 4]].forEach(([arr, ans]) => {
    test(`singleNumber returns ${ans} for ${arr}`, () => {
        expect(singleNumber(arr)).toEqual(ans);
    });
})
