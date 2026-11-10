/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P59875_TopToBottom.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the topToBottom function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { topToBottom } from './P59875_TopToBottom';

/**
 * @desc Test suite for the topToBottom function.
 */
describe('topToBottom', () => {
  test('first jutge public test case', () => {
    expect(topToBottom(3, 7)).toEqual([7, 6, 5, 4, 3]);
  });

  test('second jutge public test case', () => {
    expect(topToBottom(5, -3)).toEqual([5, 4, 3, 2, 1, 0, -1, -2, -3]);
  });

  test('third jutge public test case', () => {
    expect(topToBottom(-7, -7)).toEqual([-7]);
  });
});
