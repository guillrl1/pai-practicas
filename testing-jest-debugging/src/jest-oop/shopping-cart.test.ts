/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    shopping-cart.test.ts
 * @author  Paula Díaz Jorge
 * @date    19/02/2026
 */

import { ShoppingCart } from './shopping-cart';

describe('ShoppingCart tests', () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test('starts empty', () => {
    expect(cart.getItemCount()).toBe(0);
    expect(cart.getSubtotal()).toBe(0);
  });

  test('add() adds a new item', () => {
    cart.add('apple', 2, 3);
    expect(cart.has('apple')).toBe(true);
    expect(cart.getQuantity('apple')).toBe(3);
    expect(cart.getItemCount()).toBe(3);
  });

  test('add() accumulates quantity for same item', () => {
    cart.add('apple', 2, 2);
    cart.add('apple', 2, 1);
    expect(cart.getQuantity('apple')).toBe(3);
    expect(cart.getItemCount()).toBe(3);
  });

  test('add() throws if price changes for same item', () => {
    cart.add('apple', 2, 1);
    expect(() => cart.add('apple', 3, 1)).toThrow('price mismatch');
  });

  test('remove() decreases quantity', () => {
    cart.add('apple', 2, 5);
    cart.remove('apple', 2);
    expect(cart.getQuantity('apple')).toBe(3);
    expect(cart.getItemCount()).toBe(3);
  });

  test('remove() removes item if quantity is >= existing', () => {
    cart.add('apple', 2, 2);
    cart.remove('apple', 10);
    expect(cart.has('apple')).toBe(false);
    expect(cart.getQuantity('apple')).toBe(0);
  });

  test('remove() throws if item does not exist', () => {
    expect(() => cart.remove('banana', 1)).toThrow('item not found');
  });

  test('subtotal is price * quantity summed', () => {
    cart.add('apple', 2, 3);   // 6
    cart.add('milk', 1.5, 2);  // 3
    expect(cart.getSubtotal()).toBe(9);
  });

  test('clear() empties the cart', () => {
    cart.add('apple', 2, 1);
    cart.clear();
    expect(cart.getItemCount()).toBe(0);
    expect(cart.getSubtotal()).toBe(0);
    expect(cart.has('apple')).toBe(false);
  });

  test.each([
    ['rejects negative price', () => cart.add('x', -1, 1), 'price must be >= 0'],
    ['rejects zero quantity on add', () => cart.add('x', 1, 0), 'quantity must be > 0'],
    ['rejects negative quantity on remove', () => cart.remove('x', -1), 'quantity must be > 0'],
  ])('%s', (_name, fn, message) => {
    expect(fn).toThrow(message);
  });
});