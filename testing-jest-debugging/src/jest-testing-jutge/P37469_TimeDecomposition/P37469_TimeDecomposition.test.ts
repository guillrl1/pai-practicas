/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P37469_TimeDecomposition.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the decomposeTime function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { decomposeTime } from './P37469_TimeDecomposition';

/**
 * @desc Test suite for the decomposeTime function.
 */
describe('decomposeTime', () => {
  test('first jutge public test case', () => {
    expect(decomposeTime(3661)).toEqual([1, 1, 1]);
  });

  test('second jutge public test case', () => {
    expect(decomposeTime(0)).toEqual([0, 0, 0]);
  });

  test('third jutge public test case', () => {
    expect(decomposeTime(76234)).toEqual([21, 10, 34]);
  });

  test('input is a negative integer', () => {
    expect(() => decomposeTime(-2)).toThrow();
  });
});
