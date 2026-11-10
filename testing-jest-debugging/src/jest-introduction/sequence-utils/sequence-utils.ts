/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    sequence-utils.ts
 * @author  Guillermo López Concepción
 * @date    16/02/2026
 * @desc    Provides utilities for mathematical sequences.
 */

/**
 * Calculates the next value in a Collatz sequence.
 * @param {number} currentTerm The current value in the sequence.
 * @return {number} The next value based on Collatz rules.
 */
export function getNextCollatz(currentTerm: number): number {
  if (currentTerm <= 0) {
    throw new Error('Input must be a positive integer.');
  }
  return currentTerm % 2 === 0 ? currentTerm / 2 : (currentTerm * 3) + 1;
}