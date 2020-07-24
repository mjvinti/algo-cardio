const fizzBuzz = require('./index');

test('fizzBuzz function is defined', () => {
    expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `10` prints out 10 statements', () => {
    fizzBuzz(10);

    expect(console.log.mock.calls.length).toEqual(10);
});

test('Calling fizzbuzz with 20 prints out the correct values', () => {
    fizzBuzz(20);
    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual('fizz');
    expect(console.log.mock.calls[3][0]).toEqual(4);
    expect(console.log.mock.calls[4][0]).toEqual('buzz');
    expect(console.log.mock.calls[5][0]).toEqual('fizz');
    expect(console.log.mock.calls[6][0]).toEqual(7);
    expect(console.log.mock.calls[7][0]).toEqual(8);
    expect(console.log.mock.calls[8][0]).toEqual('fizz');
    expect(console.log.mock.calls[9][0]).toEqual('buzz');
    expect(console.log.mock.calls[10][0]).toEqual(11);
    expect(console.log.mock.calls[11][0]).toEqual('fizz');
    expect(console.log.mock.calls[12][0]).toEqual(13);
    expect(console.log.mock.calls[13][0]).toEqual(14);
    expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
    expect(console.log.mock.calls[15][0]).toEqual(16);
    expect(console.log.mock.calls[16][0]).toEqual(17);
    expect(console.log.mock.calls[17][0]).toEqual('fizz');
    expect(console.log.mock.calls[18][0]).toEqual(19);
    expect(console.log.mock.calls[19][0]).toEqual('buzz');
});

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});