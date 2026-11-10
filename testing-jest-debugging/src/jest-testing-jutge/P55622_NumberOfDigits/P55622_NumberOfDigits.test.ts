/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P55622_NumberOfDigits.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the numberOfDigits function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { numberOfDigits } from './P55622_NumberOfDigits';
import { sumOfSquares } from '../P36668_SumOfSquares/P36668_SumOfSquares';

/**
 * @desc Test suite for the numberOfDigits function.
 */
describe('numberOfDigits', () => {
  test('first jutge public test case', () => {
    expect(numberOfDigits(7)).toBe(1);
  });

  test('second jutge public test case', () => {
    expect(numberOfDigits(12345)).toBe(5);
  });

  test('third jutge public test case', () => {
    expect(numberOfDigits(0)).toBe(1);
  });
});
