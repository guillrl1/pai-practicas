/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P52847_MaxThreeIntNumbers.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the maxOfThree function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { maxOfThree } from './P52847_MaxThreeIntNumbers';

/**
 * @desc Test suite for the maxOfThree function.
 */
describe('maxOfThree', () => {
  test('first jutge public test case', () => {
    expect(maxOfThree(736, 291, 348)).toBe(736);
  });

  test('second jutge public test case', () => {
    expect(maxOfThree(12, -569, 666)).toBe(666);
  });
});
