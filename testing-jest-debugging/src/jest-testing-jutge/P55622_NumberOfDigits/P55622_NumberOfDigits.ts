/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P55622_NumberOfDigits.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads a number and returns how many digits it has.
 * @see     https://jutge.org/problems/P55622
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Counts the number of digits in a non-negative integer.
 * @param {number} number The number whose digits to count.
 * @returns {number} The number of digits.
 */
export function numberOfDigits(number: number): number {
  return String(Math.abs(number)).length;
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
    console.log(`The number of digits of ${number} is ${numberOfDigits(number)}.`);
  });

  readLineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
