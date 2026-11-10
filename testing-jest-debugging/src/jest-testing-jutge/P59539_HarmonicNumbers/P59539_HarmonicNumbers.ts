/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P59539_HarmonicNumbers.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads a number n and returns the n-th harmonic number
 *          H(n) = 1/1 + 1/2 + ... + 1/n with 4 decimal places.
 * @see     https://jutge.org/problems/P59539
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Calculates the n-th harmonic number.
 * @param {number} number The index of the harmonic number.
 * @returns {number} The harmonic number rounded to 4 decimals.
 */
export function harmonicNumber(number: number): number {
  if (number < 0) {
    throw new Error('Input must be a positive integer.');
  }
  let result: number = 0;
  for (let i: number = 1; i <= number; i++) {
    result += 1 / i;
  }
  return parseFloat(result.toFixed(4));
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
    const n: number = Number(line.trim());
    console.log(harmonicNumber(n).toFixed(4));
  });

  readLineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
