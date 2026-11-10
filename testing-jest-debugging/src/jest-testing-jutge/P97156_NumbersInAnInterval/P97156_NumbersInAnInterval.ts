/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P97156_NumbersInAnInterval.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads two numbers a and b and returns all integers from a to b
 *          separated by commas.
 * @see     https://jutge.org/problems/P97156
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Returns an array of integers from a to b (inclusive).
 * @param {number} lowerBound The lower bound.
 * @param {number} upperBound The upper bound.
 * @returns {number[]} The array of integers in the interval [lowerBound, upperBound].
 */
export function numbersInInterval(lowerBound: number, upperBound: number): number[] {
  const result: number[] = [];
  for (let current: number = lowerBound; current <= upperBound; current++) {
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
    const [lowerBound, upperBound]: number[] = line.trim().split(/\s+/).map(Number);
    console.log(numbersInInterval(lowerBound, upperBound).join(','));
  });

  readLineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
