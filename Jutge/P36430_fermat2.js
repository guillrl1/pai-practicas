/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 3 2026
 * @desc Fermat's Last Theorem (n=2 case)
 * The program finds the smallest natural solution to x^2 + y^2 = z^2
 * within the ranges [a, b] for x and [c, d] for y.
 */

'use strict';

const fs = require('fs');

/**
 * Checks if a number is a perfect square.
 * @param {number} n - The number to check.
 * @returns {number|null} - Returns the square root if it's a perfect square, null otherwise.
 */
const getPerfectSquareRoot = function(n) {
  const root = Math.round(Math.sqrt(n));
  if (root * root === n) {
    return root;
  }
  return null;
};

/**
 * Finds the first Pythagorean triple within the specified ranges.
 */
const findPythagoreanTriple = function(a, b, c, d) {
  for (let x = a; x <= b; x++) {
    const xSquared = x * x;
    for (let y = c; y <= d; y++) {
      const ySquared = y * y;
      const sumOfSquares = xSquared + ySquared;
      
      const z = getPerfectSquareRoot(sumOfSquares);

      if (z !== null) {
        process.stdout.write(`${x}^2 + ${y}^2 = ${z}^2\n`);
        return true;
      }
    }
  }
  return false;
};

/**
 * Reads a, b, c, d from stdin.
 */
const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  if (!input) return [];
  return input.split(/\s+/).map(Number);
};

function main() {
  const params = getInputs();
  if (params.length === 4) {
    const [a, b, c, d] = params;
    const found = findPythagoreanTriple(a, b, c, d);
    if (!found) {
      process.stdout.write('No solution!\n');
    }
  }
}

if (require.main === module) {
  main();
}
