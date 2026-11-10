/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    08-sleep.test.ts
 * @author  Paula Díaz Jorge
 * @date    18/02/2026
 * @desc    Tests for the sleep function to show how to test the performance of a function
 *          with the third parameter of test() that sets a time limit for the test
 *          (if the test exceeds the time limit, it fails)
 */

import { sleep } from './sleep';

describe('sleep function test', () => {
  test('FAILS because it exceeds 10ms (real async with setTimeout)', async () => {
    await sleep(100);
  }, 10); // ms

  test('PASSES because time limit is not exceeded', async () => {
    await sleep(5);
  }, 10); // ms
});