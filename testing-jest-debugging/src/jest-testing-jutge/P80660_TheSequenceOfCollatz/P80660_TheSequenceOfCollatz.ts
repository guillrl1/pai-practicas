/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P80660_TheSequenceOfCollatz.ts
 * @author  Raúl Gonzalez Acosta
 * @date    10/02/2026
 * @desc    Prints the number of steps that it takes to reach 1 
 *          for every given number using the Collatz conjecture.
 * @see     https://jutge.org/problems/P80660
 */

'use strict';

import * as readline from 'readline';

/**
 * @desc Applies one step of the Collatz conjecture.
 * @param {number} number - The current number.
 * @returns {number} The result after applying the Collatz rule.
 */
function applyCollatzRule(number: number): number {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return 3 * number + 1;
  }
}

/**
 * @desc Calculates the number of steps to reach 1 using the Collatz conjecture.
 * @param {number} number - The starting number.
 * @returns {number} The number of steps required to reach 1.
 */
export function countCollatzSteps(number: number): number {
  let steps = 0;
  while (number !== 1) {
    number = applyCollatzRule(number);
    steps++;
  }
  return steps;
}

/**
 * @desc Processes a single input line and displays the Collatz steps count.
 * @param {string} input - The input string containing a number.
 */
function processInput(input: string): void {
  const number = parseInt(input.trim(), 10);
  const steps = countCollatzSteps(number);
  console.log(steps);
}

/**
 * @desc Main function that sets up input/output and calls the processing logic.
 */
function main(): void {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readlineInterface.on('line', (input) => {
    processInput(input);
  });

  readlineInterface.on('close', () => {
    process.exit(0);
  });
}

/**
 * @desc Logic to replace the CommonJS 'require.main' check for ES Modules.
 */
import { fileURLToPath } from 'url';

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}