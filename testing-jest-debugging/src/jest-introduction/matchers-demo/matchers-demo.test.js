/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    matchers-demo.test.js
 * @author  Guillermo López Concepción
 * @date    16/02/2026
 * @desc    Tests demonstrating common Jest matchers in JavaScript.
 */

const {getLanguages, isPositive} = require('./matchers-demo');

describe('Common Matchers Suite (JS)', () => {
  /**
   * Testing array inclusion with toContain.
   */
  test('should contain TypeScript in the languages list', () => {
    const languages = getLanguages();
    expect(languages).toContain('TypeScript');
    expect(languages).toHaveLength(4);
  });

  /**
   * Testing truthiness and exact values.
   */
  test('should return true for positive numbers', () => {
    expect(isPositive(10)).toBe(true);
    expect(isPositive(10)).toBeTruthy();
  });

  /**
   * Testing exceptions with toThrow.
   */
  test('should throw an error when input is a string', () => {
    expect(() => isPositive('abc')).toThrow('Invalid input');
  });
});