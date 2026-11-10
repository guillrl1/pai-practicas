/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    shopping-cart.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests demonstrating setup/teardown hooks (beforeEach, afterEach,
 *          beforeAll, afterAll) and parameterized tests (test.each,
 *          describe.each) in Jest with TypeScript.
 */

import { expect, describe, test, beforeEach, afterEach, beforeAll, afterAll } from '@jest/globals';
import { ShoppingCart, CartItem } from './shopping-cart';

/**
 * Demonstrates beforeAll / afterAll for one-time setup shared by all tests.
 */
let sharedLog: string[] = [];

beforeAll(() => {
  sharedLog.push('Global setup: test suite started');
});

afterAll(() => {
  sharedLog = [];
});

describe('ShoppingCart – Setup & Teardown', () => {
  let cart: ShoppingCart;

  /**
   * beforeEach runs before every single test, providing a fresh cart.
   */
  beforeEach(() => {
    cart = new ShoppingCart();
    cart.addItem({ name: 'Apple', price: 1.5, quantity: 3 });
    cart.addItem({ name: 'Banana', price: 0.75, quantity: 2 });
  });

  /**
   * afterEach runs after every single test, useful for cleanup.
   */
  afterEach(() => {
    cart.clear();
  });

  test('should start with 2 distinct items after setup', () => {
    expect(cart.getItemCount()).toBe(2);
  });

  test('should calculate the correct total', () => {
    // 1.5*3 + 0.75*2 = 4.5 + 1.5 = 6.0
    expect(cart.getTotal()).toBeCloseTo(6.0);
  });

  test('should remove an existing item', () => {
    const removed = cart.removeItem('Apple');
    expect(removed).toBe(true);
    expect(cart.getItemCount()).toBe(1);
  });

  test('should return false when removing a non-existent item', () => {
    expect(cart.removeItem('Orange')).toBe(false);
    expect(cart.getItemCount()).toBe(2);
  });

  test('should merge quantities when adding a duplicate item', () => {
    cart.addItem({ name: 'Apple', price: 1.5, quantity: 2 });
    // Original 3 + 2 = 5 apples
    expect(cart.getTotal()).toBeCloseTo(1.5 * 5 + 0.75 * 2);
  });

  test('should throw for items with invalid price or quantity', () => {
    expect(() => cart.addItem({ name: 'Bad', price: -1, quantity: 1 })).toThrow();
    expect(() => cart.addItem({ name: 'Bad', price: 1, quantity: 0 })).toThrow();
  });
});

describe('ShoppingCart – Parameterized tests with test.each', () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  /**
   * test.each allows running the same test logic with different data sets.
   * Each row is passed as arguments to the test function.
   */
  test.each([
    { name: 'Milk', price: 2.0, quantity: 1, expectedTotal: 2.0 },
    { name: 'Bread', price: 1.5, quantity: 4, expectedTotal: 6.0 },
    { name: 'Eggs', price: 3.25, quantity: 2, expectedTotal: 6.5 },
  ])(
    'adding $name ($quantity × $price) should give total $expectedTotal',
    ({ name, price, quantity, expectedTotal }) => {
      cart.addItem({ name, price, quantity });
      expect(cart.getTotal()).toBeCloseTo(expectedTotal);
    }
  );
});

describe('ShoppingCart – Parameterized discount with describe.each', () => {
  /**
   * describe.each creates a whole describe block for each data set,
   * allowing multiple tests per parameter combination.
   */
  describe.each([
    { discount: 0, expectedFactor: 1.0 },
    { discount: 10, expectedFactor: 0.9 },
    { discount: 50, expectedFactor: 0.5 },
    { discount: 100, expectedFactor: 0.0 },
  ])('discount of $discount%', ({ discount, expectedFactor }) => {
    let cart: ShoppingCart;
    const baseTotal = 100;

    beforeEach(() => {
      cart = new ShoppingCart();
      cart.addItem({ name: 'Item', price: baseTotal, quantity: 1 });
    });

    test(`should reduce total to ${expectedFactor * baseTotal}`, () => {
      expect(cart.applyDiscount(discount)).toBeCloseTo(baseTotal * expectedFactor);
    });

    test('should not change the original total', () => {
      cart.applyDiscount(discount);
      expect(cart.getTotal()).toBeCloseTo(baseTotal);
    });
  });

  test('should throw for discount outside 0–100 range', () => {
    const cart = new ShoppingCart();
    cart.addItem({ name: 'X', price: 10, quantity: 1 });
    expect(() => cart.applyDiscount(-5)).toThrow('Discount must be between 0 and 100.');
    expect(() => cart.applyDiscount(110)).toThrow('Discount must be between 0 and 100.');
  });
});
