/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    08-sleep.ts
 * @author  Paula Díaz Jorge
 * @date    18/02/2026
 * @desc    Function that stops actual thread's execution for a given time
 */

/**
 * @desc    Stops actual thread's execution for a given time.
 * @param   {number} ms - Milliseconds to wait.
 * @returns {Promise<void>} A promise that is resolved after a given time.
 * @example await sleep(2000); // Waits 2 seconds
 */
export const sleep = (milliseconds: number) => {
  return new Promise<void>(resolve => setTimeout(resolve, milliseconds));
}