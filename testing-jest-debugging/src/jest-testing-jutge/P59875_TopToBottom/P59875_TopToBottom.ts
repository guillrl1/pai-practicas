/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P59875_TopToBottom.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads two numbers and returns all integers between them
 *          in decreasing order.
 * @see     https://jutge.org/problems/P59875
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Returns an array of integers from the maximum to the minimum
 *       of the two given numbers (inclusive, decreasing order).
 * @param {number} first First number.
 * @param {number} last Last number.
 * @returns {number[]} The integers in decreasing order.
 */
export function topToBottom(first: number, last: number): number[] {
  const maximum: number = Math.max(first, last);
  const minimum: number = Math.min(first, last);
  const result: number[] = [];
  for (let current: number = maximum; current >= minimum; current--) {
    result.push(current);
  }
  return result;
}

/**
 * @desc Main function that reads input and prints the result.
 */
function main(): void {
  const readLineInterface: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readLineInterface.on('line', (line: string): void => {
    const [first, last]: number[] = line.trim().split(/\s+/).map(Number);
    console.log(topToBottom(first, last).join('\n'));
  });

  readLineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
