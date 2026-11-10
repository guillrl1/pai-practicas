/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    collatz-conjecture.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Collatz Conjecture calculator in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/collatz-conjecture
 */

/**
 * @desc Calculates the number of steps to reach 1 
 *       following the Collatz Conjecture.
 * @param {number} count - The starting positive integer.
 * @returns {number} The number of steps required to reach 1.
 * @throws {Error} If the input is not a positive integer.
 */
export function steps(count: number): number {
  if (count <= 0 || !Number.isInteger(count)) {
    throw new Error('Only positive integers are allowed')
  }
  // Base case
  if (count == 1) { return 0; } 
  // Recursive case
  else { return (1 + steps(count % 2 == 0 ? (count / 2) : (3 * count + 1))); }
}