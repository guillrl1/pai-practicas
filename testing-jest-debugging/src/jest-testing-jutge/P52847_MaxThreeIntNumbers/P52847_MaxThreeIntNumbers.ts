/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P52847_MaxThreeIntNumbers.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads three different integers and returns the maximum.
 * @see     https://jutge.org/problems/P52847
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Returns the maximum of three integers.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @param {number} c Third number.
 * @returns {number} The maximum of the three numbers.
 */
export function maxOfThree(first: number, second: number, third: number): number {
  return Math.max(first, second, third);
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
    const [first, second, third]: number[] = line.trim().split(/\s+/).map(Number);
    console.log(maxOfThree(first, second, third));
  });

  readLineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
