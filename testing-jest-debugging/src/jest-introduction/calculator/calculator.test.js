/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    calculator.test.js
 * @author  Guillermo López Concepción
 * @date    16/02/2026
 * @desc    Unit tests for the calculator module using Jest.
 */

const {add} = require('./calculator');

describe('Calculator Logic', () => {
  /** Test case for the add function. */
  it('should return 5 when adding 2 and 3', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  /** Test case for negative numbers. */
  it('should handle negative numbers correctly', () => {
    expect(add(-1, -1)).toBe(-2);
  });
});