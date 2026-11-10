/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P78142_Average.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the average function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { average } from './P78142_Average';

/**
 * @desc Test suite for the average function.
 */
describe('average', () => {
  test('first jutge public test case', () => {
    expect(average([1, 4, 9])).toBe(4.67);
  });

  test('second jutge public test case', () => {
    expect(average([7.4])).toBe(7.40);
  });

  test('empty input', () => {
    expect(() => average([])).toThrow();
  });
});
