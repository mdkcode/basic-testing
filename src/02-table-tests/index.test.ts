// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 100.5, b: 2, action: Action.Subtract, expected: 98.5 },
  { a: 0, b: 2, action: Action.Divide, expected: 0 },
  { a: 8, b: 8, action: Action.Divide, expected: 1 },
  { a: 3, b: 2, action: Action.Divide, expected: 1.5 },
  { a: 1, b: 0, action: Action.Multiply, expected: 0 },
  { a: 200, b: 2, action: Action.Multiply, expected: 400 },
  { a: 3.5, b: 2, action: Action.Multiply, expected: 7 },
  { a: 2, b: 2, action: '', expected: null },
  { a: '', b: 2, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  it.each(testCases)(
    'should perform table tests',
    ({ expected, ...calcInput }) => {
      const res = simpleCalculator(calcInput);
      expect(res).toEqual(expected);
    },
  );
});
