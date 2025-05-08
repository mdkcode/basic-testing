// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  const expectedRes = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: null,
        next: null,
      },
    },
  };

  test('should generate linked list from values 1', () => {
    expect(generateLinkedList([1, 2])).toStrictEqual(expectedRes);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const result = generateLinkedList([2, 3, 4]);
    expect(result).toMatchSnapshot();
  });
});
