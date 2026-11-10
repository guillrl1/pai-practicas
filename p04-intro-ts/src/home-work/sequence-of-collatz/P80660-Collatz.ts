/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Collatz Conjecture Steps
 * The program reads a sequence of natural numbers and prints
 * the number of steps each takes to reach 1 according to the conjecture.
 */

import * as fileSystem from 'fs';

/**
 * Calculates the total number of steps to reach 1 for a given number
 * following the Collatz conjecture rules.
 * @param {number} startingNumber - The initial natural number (n > 0).
 * @returns {number} The total count of operations performed.
 */
export const countCollatzOperations = (startingNumber: number): number => {
  let operationalStepCount: number = 0;
  let currentEvaluationValue: number = startingNumber;

  while (currentEvaluationValue !== 1) {
    if (currentEvaluationValue % 2 === 0) {
      currentEvaluationValue /= 2;
    } else {
      currentEvaluationValue = (currentEvaluationValue * 3) + 1;
    }
    ++operationalStepCount;
  }

  return operationalStepCount;
};

/**
 * Reads from standard input and converts the content into an array of numbers.
 * @returns {number[]} A collection of numbers parsed from the input stream.
 */
export const getNumericInputsFromStream = (): number[] => {
  const rawInputContent: string = fileSystem.readFileSync(0, 'utf8').trim();
  if (!rawInputContent) {
    return [];
  }
  return rawInputContent.split(/\s+/).map(Number);
};

/**
 * Orchestrates the reading, calculation, and output of Collatz steps.
 */
export function main(): void {
  const numbersToProcess: number[] = getNumericInputsFromStream();
  let formattedOutput: string = '';

  for (const singleNumber of numbersToProcess) {
    if (!Number.isNaN(singleNumber)) {
      const totalSteps: number = countCollatzOperations(singleNumber);
      formattedOutput += `${totalSteps}\n`;
    }
  }

  process.stdout.write(formattedOutput);
}

if (require.main === module) {
  main();
}