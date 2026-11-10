/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P36668_SumOfSquares.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the sumOfSquares function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { sumOfSquares } from './P36668_SumOfSquares';

/**
 * @desc Test suite for the sumOfSquares function.
 */
describe('sumOfSquares', () => {
  test('first jutge public test case', () => {
    expect(sumOfSquares(3)).toBe(14);
  });

  test('second jutge public test case', () => {
    expect(sumOfSquares(4)).toBe(30);
  });

  test('should return 0 for n = 0', () => {
    expect(sumOfSquares(0)).toBe(0);
  });

  test('should return 1 for n = 1', () => {
    expect(sumOfSquares(1)).toBe(1);
  });

  test('should throw an error for negative input', () => {
    expect(() => sumOfSquares(-1)).toThrow();
  });
});
