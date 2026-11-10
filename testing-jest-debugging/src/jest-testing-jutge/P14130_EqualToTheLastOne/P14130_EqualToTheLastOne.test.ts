/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P14130_EqualToTheLastOne.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the countEqualToLast function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { countEqualToLast } from './P14130_EqualToTheLastOne';

/**
 * @desc Test suite for the countEqualToLast function.
 */
describe('countEqualToLast', () => {
  test('should return 2 for [1, 7, 3, 2, 4, 7, 5, 8, 7]', () => {
    expect(countEqualToLast([1, 7, 3, 2, 4, 7, 5, 8, 7])).toBe(2);
  });

  test('should return 0 for [-3, 10, 0, -2, 7]', () => {
    expect(countEqualToLast([-3, 10, 0, -2, 7])).toBe(0);
  });

  test('should return 0 for a single-element sequence', () => {
    expect(countEqualToLast([5])).toBe(0);
  });

  test('should return 3 when all elements are equal [4, 4, 4, 4]', () => {
    expect(countEqualToLast([4, 4, 4, 4])).toBe(3);
  });

  test('should return 1 for [2, 3, 2]', () => {
    expect(countEqualToLast([2, 3, 2])).toBe(1);
  });

  test('should return 0 when no element matches the last [1, 2, 3]', () => {
    expect(countEqualToLast([1, 2, 3])).toBe(0);
  });

  test('should handle negative numbers [-5, -5, -5]', () => {
    expect(countEqualToLast([-5, -5, -5])).toBe(2);
  });

  test('should throw an error for an empty sequence', () => {
    expect(() => countEqualToLast([])).toThrow();
  });
});
