/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    leap.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Leap year calculator in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/leap
 */

/**
 * @desc Determines if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 */
export function isLeap(year: number): boolean {
  return ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0)));
}