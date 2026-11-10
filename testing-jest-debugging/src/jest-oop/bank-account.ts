/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    bank-account.ts
 * @author  Paula Díaz Jorge
 * @date    19/02/2026
 * @desc   A simple bank account class with deposit, withdraw and getBalance methods.
 */

/**
 * @desc    A simple bank account class with deposit, withdraw and getBalance methods.
 */
export class BankAccount {
  private balance = 0;

  /**
   * @desc   Deposits a given amount to the account. Amount must be positive.
   * @param amount Amount to deposit.
   */
  deposit(amount: number) {
    if (amount <= 0) throw new Error('amount must be positive');
    this.balance += amount;
  }

  /**
   * @desc  Withdraws a given amount from the account. 
   *        Amount must be positive and less than or equal to the current balance.
   * @param amount Amount to withdraw.
   */
  withdraw(amount: number) {
    if (amount <= 0) throw new Error('amount must be positive');
    if (amount > this.balance) throw new Error('insufficient funds');
    this.balance -= amount;
  }

  /**
   * @desc  Returns the current balance of the account.
   */
  getBalance() {
    return this.balance;
  }
}
