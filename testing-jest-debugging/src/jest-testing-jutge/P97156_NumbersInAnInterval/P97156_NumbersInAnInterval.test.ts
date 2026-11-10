/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P97156_NumbersInAnInterval.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the numbersInInterval function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { numbersInInterval } from './P97156_NumbersInAnInterval';

/**
 * @desc Test suite for the numbersInInterval function.
 */
describe('numbersInInterval', () => {
  test('first jutge public test case', () => {
    expect(numbersInInterval(15, 21)).toEqual([15, 16, 17, 18, 19, 20, 21]);
  });

  test('second jutge public test case', () => {
    expect(numbersInInterval(20, 10)).toEqual([]);
  });

  test('third jutge public test case', () => {
    expect(numbersInInterval(7, 7)).toEqual([7]);
  })
});
