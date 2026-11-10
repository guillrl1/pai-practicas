/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P76024_SumOfFractions.ts
 * @author  Raúl Gonzalez Acosta
 * @date    10/02/2026
 * @desc    Reads triples of natural numbers denominator, maxDenominator and step, and for each of them 
 *          prints the sum of the fractions 1/denominator + 1/(denominator + step) + 1/(denominator + 2*step) + ...
 *          for all the denominators that are less than or equal to maxDenominator.
 * @see     https://jutge.org/problems/P76024
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Creates and returns a readline interface.
 * @returns {readline.Interface} The readline interface for stdin/stdout.
 */
function createReadlineInterface(): readline.Interface {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

/**
 * @desc Calculates the sum of the fractions 1/a + 1/(a + k) + 1/(a + 2k) + ...
 *        for all the denominators that are less than or equal to b.
 * @param {number} denominator - The starting denominator.
 * @param {number} maxDenominator - The maximum denominator.
 * @param {number} step - The step for the denominators.
 * @returns {number} The sum of the fractions.
 */
export function sumOfFractions(denominator: number, maxDenominator: number, step: number): number {
  let sum: number = 0;
  for (let currentDenominator: number = denominator; currentDenominator <= maxDenominator; currentDenominator += step) {
    sum += 1 / currentDenominator;
  }
  return parseFloat(sum.toFixed(4));
}

/**
 * @desc Main function that reads input lines, processes them, and prints the results.
 */
function main(): void {
  const readlineInterface: readline.Interface = createReadlineInterface();

  readlineInterface.on('line', (line: string): void => {
    const [denominator, maxDenominator, step]: number[] = line.trim().split(/\s+/).map(Number);
    const result: number = sumOfFractions(denominator, maxDenominator, step);
    console.log(result);
  });

  readlineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}