// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const res = simpleCalculator({
      a: 5,
      b: 6,
      action: Action.Add,
    });
    expect(res).toBe(11);
  });

  test('should subtract two numbers', () => {
    const res = simpleCalculator({
      a: 30,
      b: 23,
      action: Action.Subtract,
    });
    expect(res).toBe(7);
  });

  test('should multiply two numbers', () => {
    const res = simpleCalculator({
      a: 8,
      b: 9,
      action: Action.Multiply,
    });
    expect(res).toBe(72);
  });

  test('should divide two numbers', () => {
    const res = simpleCalculator({
      a: 56,
      b: 4,
      action: Action.Divide,
    });
    expect(res).toBe(14);
  });

  test('should exponentiate two numbers', () => {
    const res = simpleCalculator({
      a: 5,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(res).toBe(25);
  });

  test('should return null for invalid action', () => {
    const res = simpleCalculator({
      a: 77,
      b: 2,
      action: '',
    });
    expect(res).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const res = simpleCalculator({
      a: '',
      b: '',
      action: Action.Subtract,
    });
    expect(res).toBe(null);
  });
});
