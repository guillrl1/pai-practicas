/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    sequence-utils.test.ts
 * @author  Guillermo López Concepción
 * @date    16/02/2026
 * @desc    Tests the sequence utility functions using Jest and TypeScript.
 */

import { expect, describe, test } from '@jest/globals';
import {getNextCollatz} from './sequence-utils';

describe('Collatz Sequence Utilities', () => {
  /** Tests even number logic: n / 2. */
  test('should return half the value if the input is even', () => {
    const input: number = 10;
    const expectedOutput: number = 5;
    expect(getNextCollatz(input)).toEqual(expectedOutput);
  });

  /** Tests odd number logic: 3n + 1. */
  test('should return 3n + 1 if the input is odd', () => {
    const input: number = 3;
    const expectedOutput: number = 10;
    expect(getNextCollatz(input)).toEqual(expectedOutput);
  });

  /** Tests error handling for non-positive integers. */
  test('should throw an error for non-positive integers', () => {
    expect(() => getNextCollatz(0)).toThrow('Input must be a positive integer.');
    expect(() => getNextCollatz(-5)).toThrow();
  });
});