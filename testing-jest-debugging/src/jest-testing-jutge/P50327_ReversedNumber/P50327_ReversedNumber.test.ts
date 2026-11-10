/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P50327_ReversedNumber.test.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Tests the reverseNumber function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { reverseNumber } from './P50327_ReversedNumber';

/**
 * @desc Test suite for the reverseNumber function.
 */
describe('reverseNumber', () => {
  test('first jutge public test case', () => {
    expect(reverseNumber(16)).toBe('61');
  });

  test('should reverse 1023 to 3201', () => {
    expect(reverseNumber(1023)).toBe('3201');
  });

  test('should reverse 90800 to 00809', () => {
    expect(reverseNumber(90800)).toBe('00809');
  });

  test('should reverse 65547 to 74556', () => {
    expect(reverseNumber(65547)).toBe('74556');
  });

  test('should reverse 0 to 0', () => {
    expect(reverseNumber(0)).toBe('0');
  });

  test('should reverse 1000000000 to 0000000001', () => {
    expect(reverseNumber(1000000000)).toBe('0000000001');
  });
});
