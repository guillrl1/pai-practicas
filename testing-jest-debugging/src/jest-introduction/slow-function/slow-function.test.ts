/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    slow-function.test.ts
 * @author  Paula Díaz Jorge
 * @date    18/02/2026
 * @desc   Tests for the slowFunction function to show how to test the performance of a synchronous function 
 *         with the third parameter of test() that sets a time limit for the test and with performance.now() 
 *         and Date.now() to measure the execution time of the function
 */

import { slowFunction } from './slow-function';

describe('slowFunction function tests', () => {
  test('Timeout does not work with a synchronous function to test time limits', () => {
    slowFunction(500);
  }, 50);

  test('slowFunction must not exceed 5ms of execution time (using performance.now)', () => {
    const start = performance.now();
    slowFunction(5);
    const end = performance.now()

    expect(end - start).toBeLessThanOrEqual(5);
  });

  test('slowFunction must not exceed 5ms of execution time (using Date.now)', () => {
    const start = Date.now();
    slowFunction(5);
    const end = Date.now()

    expect(end - start).toBeLessThanOrEqual(5);
  });
});