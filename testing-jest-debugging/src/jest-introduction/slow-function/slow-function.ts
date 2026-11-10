/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    slow-function.ts
 * @author  Paula Díaz Jorge
 * @date    18/02/2026
 * @desc    Function that runs for a given time in milliseconds
 */

/**
 * @desc Runs for x milliseconds
 * @param milliseconds 
 * @returns 'done' when the time has passed
 */
export function slowFunction(milliseconds: number) {
  const end = Date.now() + milliseconds;
  while (Date.now() < end) {
    // empty loop
  }
  return 'done';
}