/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P36668_SumOfSquares.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads a number n and returns the sum of squares from 1 to n:
 *          1² + 2² + ... + n² = n(n+1)(2n+1)/6
 * @see     https://jutge.org/problems/P36668
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Calculates the sum of squares from 1 to n.
 * @param {number} number The upper limit.
 * @returns {number} The sum 1² + 2² + ... + n².
 */
export function sumOfSquares(number: number): number {
  if (number < 0) {
    throw new Error('Input must be a non-negative integer.');
  }
  return (number * (number + 1) * (2 * number + 1)) / 6;
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
    const number: number = Number(line.trim());
    console.log(sumOfSquares(number));
  });

  readLineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
