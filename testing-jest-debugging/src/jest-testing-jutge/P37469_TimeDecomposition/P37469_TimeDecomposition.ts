/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P37469_TimeDecomposition.ts
 * @author  Paula Díaz Jorge
 * @date    16/02/2026
 * @desc    Reads a number of seconds and decomposes it into hours, minutes
 *          and seconds.
 * @see     https://jutge.org/problems/P37469
 */

'use strict';

import * as readline from 'readline';

const SECONDS_PER_HOUR: number = 3600;
const SECONDS_PER_MINUTE: number = 60;

/**
 * @desc Decomposes a total number of seconds into hours, minutes and seconds.
 * @param {number} totalSeconds The total seconds to decompose.
 * @returns {[number, number, number]} A tuple [hours, minutes, seconds].
 */
export function decomposeTime(totalSeconds: number): [number, number, number] {
  if (totalSeconds < 0) {
    throw new Error('Input must be a non-negative integer.');
  }
  const hours: number = Math.floor(totalSeconds / SECONDS_PER_HOUR);
  let remaining: number = totalSeconds - SECONDS_PER_HOUR * hours;
  const minutes: number = Math.floor(remaining / SECONDS_PER_MINUTE);
  const seconds: number = remaining - SECONDS_PER_MINUTE * minutes;
  return [hours, minutes, seconds];
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
    const totalSeconds: number = Number(line.trim());
    const [hours, minutes, seconds] = decomposeTime(totalSeconds);
    console.log(`${hours} ${minutes} ${seconds}`);
  });

  readLineInterface.on('close', (): void => {
    process.exit(0);
  });
}

if (require.main === module) {
  main();
}
