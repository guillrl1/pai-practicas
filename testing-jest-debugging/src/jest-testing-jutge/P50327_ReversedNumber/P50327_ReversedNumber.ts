/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P50327_ReversedNumber.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads a number and returns it reversed.
 * @see     https://jutge.org/problems/P50327
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Reverses the digits of a number.
 * @param {number} number The number to reverse.
 * @returns {String} The reversed number.
 */
export function reverseNumber(number: number): String {
  return String(number).split('').reverse().join('');
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
    console.log(reverseNumber(number));
  });

  readLineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
