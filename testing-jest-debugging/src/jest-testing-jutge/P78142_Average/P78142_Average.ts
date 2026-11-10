/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P78142_Average.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads a sequence of numbers and returns their average
 *          with 2 decimal places.
 * @see     https://jutge.org/problems/P78142
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Calculates the average of an array of numbers.
 * @param {number[]} numbers The numbers to average.
 * @returns {number} The average rounded to 2 decimals.
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('The array must not be empty.');
  }
  const sum: number = numbers.reduce((accumulator, value) => accumulator + value, 0);
  return parseFloat((sum / numbers.length).toFixed(2));
}

/**
 * @desc Main function that reads input and prints the result.
 */
function main(): void {
  const readLineInterface: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let allNumbers: number[] = [];

  readLineInterface.on('line', (line: string): void => {
    const numbers: number[] = line.trim().split(/\s+/).map(Number);
    allNumbers = allNumbers.concat(numbers);
  });

  readLineInterface.on('close', (): void => {
    console.log(average(allNumbers).toFixed(2));
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
