/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Collatz Pseudo-sequences
 * This program calculates the cycle length of a modified Collatz sequence
 * defined by parameters x and y, or returns the first value exceeding 10^6.
 */

import * as fileSystem from 'fs';

/**
 * Limit for the sequence values as defined in the problem.
 */
export const SEQUENCE_LIMIT: number = 1000000;

/**
 * Computes the next value in the pseudo-Collatz sequence.
 * @param {number} currentTerm - The current value in the sequence.
 * @param {number} evenIncrement - The value x to add if currentTerm is even.
 * @param {number} oddIncrement - The value y to add if currentTerm is odd.
 * @returns {number} The next term in the sequence.
 */
export const getNextSequenceTerm = (
  currentTerm: number,
  evenIncrement: number,
  oddIncrement: number
): number => {
  if (currentTerm % 2 === 0) {
    return Math.floor(currentTerm / 2) + evenIncrement;
  }
  return (3 * currentTerm) + oddIncrement;
};

/**
 * Determines the cycle length or identifies if the sequence exceeds the limit.
 * @param {number} evenIncrement - Parameter x.
 * @param {number} oddIncrement - Parameter y.
 * @param {number} startingValue - Initial value n.
 * @returns {number} The cycle length or the first value exceeding 10^6.
 */
export const evaluateSequence = (
  evenIncrement: number,
  oddIncrement: number,
  startingValue: number
): number => {
  const seenValuesPositions: Map<number, number> = new Map();
  let currentValue: number = startingValue;
  let currentPosition: number = 0;

  while (currentValue <= SEQUENCE_LIMIT) {
    if (seenValuesPositions.has(currentValue)) {
      const firstOccurrence: number = seenValuesPositions.get(currentValue)!;
      return currentPosition - firstOccurrence;
    }

    seenValuesPositions.set(currentValue, currentPosition);
    currentValue = getNextSequenceTerm(currentValue, evenIncrement, oddIncrement);
    currentPosition++;
  }

  return currentValue;
};

/**
 * Parses standard input to extract numeric values for processing.
 * @returns {number[]} Array of numbers from the input.
 */
export const getParsedInputs = (): number[] => {
  const inputBuffer: string = fileSystem.readFileSync(0, 'utf8').trim();
  return inputBuffer ? inputBuffer.split(/\s+/).map(Number) : [];
};

/**
 * Main function to handle multiple test cases and output results.
 */
export function main(): void {
  const inputNumbers: number[] = getParsedInputs();
  let outputResults: string = '';

  for (let i = 0; i < inputNumbers.length; i += 3) {
    const xParam: number = inputNumbers[i];
    const yParam: number = inputNumbers[i + 1];
    const startN: number = inputNumbers[i + 2];

    if (!Number.isNaN(xParam) && !Number.isNaN(yParam) && !Number.isNaN(startN)) {
      outputResults += `${evaluateSequence(xParam, yParam, startN)}\n`;
    }
  }

  process.stdout.write(outputResults);
}

if (require.main === module) {
  main();
}