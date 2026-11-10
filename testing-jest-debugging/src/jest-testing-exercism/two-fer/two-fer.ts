/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    two-fer.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Two-Fer in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/two-fer
 */

/** 
 * @desc Returns a sharing statement in the format 'One for X, one for me.'.
 * @param {string} name - The name of the person to share with. Defaults to 'you'.
 * @returns {string} The sharing statement.
 */
export function twoFer(name: string = 'you'): string {
  return `One for ${name}, one for me.`;
}