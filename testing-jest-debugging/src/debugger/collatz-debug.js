/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    collatz-debug.js
 * @author  Guillermo López Concepción
 * @date    20/02/2026
 * @desc    A script to demonstrate the use of the VS Code debugger
 * using the Collatz sequence logic.
 */

'use strict';

/**
 * Computes the steps of the Collatz sequence and logs them.
 * @param {number} number - The starting positive integer.
 * @return {number[]} The complete sequence of numbers.
 */
function getCollatzSequence(number) {
  const sequence = [number];
  let current = number;
  // 🚩 STEP 1: Put a breakpoint on the while line below
  while (current > 1) {
    if (current % 2 === 0) {
      current = current / 2;
    } else {
      current = (current * 3) + 1;
    }
    sequence.push(current);
    // 🚩 STEP 2: Use the 'Watch' panel to track the 'current' variable
    // current % 2 === 0
    console.log('Current value:', current);
  }
  return sequence;
}

function main() {
  const startNumber = 6;
  console.log(`Starting Collatz sequence for: ${startNumber}`);
  const result = getCollatzSequence(startNumber);
  console.log('Sequence finished:', result.join(' -> '));
}

if (require.main === module) {
  main();
}