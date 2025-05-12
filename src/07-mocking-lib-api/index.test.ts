// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi, THROTTLE_TIME } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  test('should create instance with provided base url', async () => {
    const mockGet = jest.fn().mockResolvedValue({ data: 'mocked response' });
    const mockCreate = jest.fn(() => ({ get: mockGet }));
    (axios.create as jest.Mock).mockImplementation(mockCreate);
    throttledGetDataFromApi('/posts/1');
    jest.advanceTimersByTime(THROTTLE_TIME);
    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
    expect(mockGet).toHaveBeenCalledWith('/posts/1');
  });

  test('should perform request to correct provided url', async () => {
    const mockData = { name: 'Jane Doe' };
    const mockGet = jest.fn().mockResolvedValue({ data: mockData });
    const mockCreate = jest.fn(() => ({ get: mockGet }));
    (axios.create as jest.Mock).mockImplementation(mockCreate);
    throttledGetDataFromApi('/posts/123');
    jest.advanceTimersByTime(THROTTLE_TIME);
    expect(mockGet).toHaveBeenCalledWith('/posts/123');
  });

  test('should return response data', async () => {
    const mockData = { name: 'Jane Doe' };
    const mockGet = jest.fn().mockResolvedValue({ data: mockData });
    const mockCreate = jest.fn(() => ({ get: mockGet }));
    (axios.create as jest.Mock).mockImplementation(mockCreate);
    let result;
    const call = async () => {
      result = await throttledGetDataFromApi('/posts/123');
    };
    await call();
    jest.advanceTimersByTime(THROTTLE_TIME);
    expect(mockGet).toHaveBeenCalledWith('/posts/123');
    expect(result).toEqual(mockData);
  });
});
