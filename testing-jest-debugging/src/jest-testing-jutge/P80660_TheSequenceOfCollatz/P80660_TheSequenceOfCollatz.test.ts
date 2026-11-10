/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P80660_TheSequenceOfCollatz.test.ts
 * @author  Raúl Gonzalez Acosta
 * @date    10/02/2026
 * @desc    Tests the countCollatzSteps function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { countCollatzSteps } from './P80660_TheSequenceOfCollatz';

/**
 * @desc Test suite for the countCollatzSteps function.
 */
describe('countCollatzSteps', () => {
  test('jutge input 1', () => {
    const result: number = countCollatzSteps(3);
    expect(result).toEqual(7);
  });

  test('jutge input 2', () => {
    const result: number = countCollatzSteps(1);
    expect(result).toEqual(0);
  });

  test('jutge input 3', () => {
    const result: number = countCollatzSteps(40);
    expect(result).toEqual(8);
  });
});