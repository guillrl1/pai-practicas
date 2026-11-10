/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    validator.test.ts
 * @author  Guillermo López Concepción
 * @date    17/02/2026
 * @desc    Tests for validator using Jest.
 */

import { validateRole } from './validator';

describe('Validator System', () => {
  test('should include the new role in the list', () => {
    const roles = validateRole('editor');
    expect(roles).toContain('editor');
  });

  test('should throw error on empty input', () => {
    expect(() => validateRole('')).toThrow('Empty role');
  });
});