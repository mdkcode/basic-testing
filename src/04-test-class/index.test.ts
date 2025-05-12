// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(500);
    expect(account.getBalance()).toBe(500);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(500);
    expect(() => account.withdraw(900)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(500);
    const toAccount = getBankAccount(700);
    expect(() => account.transfer(600, toAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(500);
    expect(() => account.transfer(300, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const account = getBankAccount(500);
    expect(account.deposit(300)).toEqual({ _balance: 800 });
  });

  test('should withdraw money', () => {
    const account = getBankAccount(500);
    expect(account.withdraw(200)).toEqual({ _balance: 300 });
  });

  test('should transfer money', () => {
    const account = getBankAccount(500);
    const toAccount = getBankAccount(700);
    expect(account.transfer(450, toAccount)).toEqual({ _balance: 50 });
  });

  // test('fetchBalance should return number in case if request did not failed', async () => {
  //   const account = getBankAccount(500);
  //   await expect(typeof account.fetchBalance()).toBe('number');
  // });

  // test('should set new balance if fetchBalance returned number', async () => {
  //   // Write your tests here
  // });

  // test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
  //   // const account = getBankAccount(500);
  //   // await expect(account.fetchBalance()).resolves.toThrow(SynchronizationFailedError);
  // });
});
