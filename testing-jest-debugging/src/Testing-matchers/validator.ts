/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    validator.ts
 * @author  Guillermo López Concepción
 * @date    17/02/2026
 * @desc    Logic for input validation.
 */

/**
 * Validates if a role is allowed.
 * @param {string} role 
 * @throws {Error} If role is empty.
 */
export function validateRole(role: string): string[] {
  if (!role) throw new Error('Empty role');
  return ['admin', 'guest', role];
}