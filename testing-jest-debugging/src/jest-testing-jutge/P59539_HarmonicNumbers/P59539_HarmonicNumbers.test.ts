/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P59539_HarmonicNumbers.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the harmonicNumber function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { harmonicNumber } from './P59539_HarmonicNumbers';

/**
 * @desc Test suite for the harmonicNumber function.
 */
describe('harmonicNumber', () => {
  test('first jutge public test case', () => {
    expect(harmonicNumber(2)).toBe(1.5000);
  });

  test('second jutge public test case', () => {
    expect(harmonicNumber(0)).toBe(0.0000);
  });

  test('third jutge public test case', () => {
    expect(harmonicNumber(7)).toBe(2.5929);
  });
});
