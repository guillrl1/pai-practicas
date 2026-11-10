/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    bank-account.test.ts
 * @author  Paula Díaz Jorge
 * @date    19/02/2026
 * @desc    Tests for the BankAccount class, including deposit, withdraw and getBalance methods.
 */


import { BankAccount } from './bank-account';

describe('BankAccount tests', () => {
  test('deposit increases balance', () => {
    const account = new BankAccount();
    account.deposit(50);
    expect(account.getBalance()).toBe(50);
  });

  xtest('error deposit increases balance', () => {
    const account = new BankAccount();
    expect(() => account.deposit(-10)).toThrow('amount must be positive');
  });

  test('withdraw decreases balance', () => {
    const account = new BankAccount();
    account.deposit(50);
    account.withdraw(20);
    expect(account.getBalance()).toBe(30);
  });

  test('withdraw throws on insufficient funds', () => {
    const account = new BankAccount();
    expect(() => account.withdraw(10)).toThrow('insufficient funds');
  });

  test('spy example: calls getBalance()', () => {
    const acc = new BankAccount();
    const spy = jest.spyOn(acc, 'getBalance');

    acc.getBalance();
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();
  });
});
