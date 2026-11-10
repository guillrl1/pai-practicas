/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P14130_EqualToTheLastOne.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads a sequence of numbers and returns how many are equal
 *          to the last one (excluding the last one itself).
 * @see     https://jutge.org/problems/P14130
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Counts how many elements in the sequence are equal to the last one
 *       (not counting the last element itself).
 * @param {number[]} sequence The sequence of numbers.
 * @returns {number} The count of elements equal to the last one.
 */
export function countEqualToLast(sequence: number[]): number {
  if (sequence.length === 0) {
    throw new Error('The sequence must not be empty.');
  }
  const last: number = sequence[sequence.length - 1];
  let count: number = 0;
  for (let i: number = 0; i < sequence.length - 1; i++) {
    if (sequence[i] === last) {
      count++;
    }
  }
  return count;
}

/**
 * @desc Main function that reads input and prints the result.
 */
function main(): void {
  const readLineInterface: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const lines: string[] = [];

  readLineInterface.on('line', (line: string): void => {
    lines.push(line.trim());
  });

  readLineInterface.on('close', (): void => {
    const sequence: number[] = lines[1].split(/\s+/).map(Number);
    console.log(countEqualToLast(sequence));
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
