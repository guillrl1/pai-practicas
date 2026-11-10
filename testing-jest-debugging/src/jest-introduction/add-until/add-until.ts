/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    05-add-until.ts
 * @author  Paula Díaz Jorge
 * @date    18/02/2026
 * @desc   Function that adds the numbers from 1 to number
 */

/**
 * @desc    Adds the numbers from 1 to number
 * @param   {number} number - The last number to add
 * @returns {number} The addition of all the numbers between 1 and number (both included)
 * @example addUntil(3) // 6 (1 + 2 + 3)
 */
export function addUntil(number: number) {
  let result = 0;
  for (let current = 1; current <= number; current++) {
    result += current;
  }
  return result;
}
