/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Sum of Fractions
 * This program reads triples (a, b, k) and calculates the sum of 
 * fractions 1/a + 1/(a+k) + 1/(a+2k) + ... as long as the 
 * denominator is less than or equal to b.
 */

import * as fileSystem from 'fs';

/**
 * Calculates the harmonic-like sum based on the provided parameters.
 * @param {number} startDenominator - The initial denominator value (a).
 * @param {number} limitDenominator - The maximum value the denominator can take (b).
 * @param {number} stepValue - The increment applied to the denominator in each step (k).
 * @returns {number} The total accumulated sum of the fractions.
 */
export const calculateHarmonicSum = (
  startDenominator: number,
  limitDenominator: number,
  stepValue: number
): number => {
  let accumulatedSum: number = 0;
  for (
    let currentDenominator: number = startDenominator;
    currentDenominator <= limitDenominator;
    currentDenominator += stepValue
  ) {
    accumulatedSum += 1 / currentDenominator;
  }
  return accumulatedSum;
};

/**
 * Retrieves and parses all numeric values from the standard input stream.
 * @returns {number[]} An array containing the numbers parsed from input.
 */
const getInputsFromStandardStream = (): number[] => {
  const rawInputData: string = fileSystem.readFileSync(0, 'utf8').trim();
  if (!rawInputData) {
    return [];
  }
  return rawInputData.split(/\s+/).map(Number);
};

/**
 * Main execution block to process triples and output results formatted to 4 decimals.
 */
export function main(): void {
  const inputValues: number[] = getInputsFromStandardStream();
  let outputBuffer: string = '';

  for (let index: number = 0; index < inputValues.length; index += 3) {
    const startA: number = inputValues[index];
    const limitB: number = inputValues[index + 1];
    const stepK: number = inputValues[index + 2];

    if (!Number.isNaN(startA) && !Number.isNaN(limitB) && !Number.isNaN(stepK)) {
      const result: number = calculateHarmonicSum(startA, limitB, stepK);
      outputBuffer += `${result.toFixed(4)}\n`;
    }
  }

  process.stdout.write(outputBuffer);
}

if (require.main === module) {
  main();
}