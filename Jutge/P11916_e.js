/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 6 2026
 * @desc Taylor series approximation of 'e'
 * The program computes the sum of the first n terms of the series
 * for e = sum(1/i!) with 10 decimal places.
 */

'use strict';

const fs = require('fs');

/**
 * Computes the approximation of e using n terms.
 * @param {number} n - Number of terms to sum.
 * @returns {string} - The sum formatted to 10 decimal places.
 */
const approximateE = function(n) {
  if (n === 0) return (0).toFixed(10);
  
  let sum = 0.0;
  let factorial = 1.0;

  for (let i = 0; i < n; i++) {
    if (i > 0) {
      factorial *= i;
    }
    sum += 1.0 / factorial;
  }
  
  return sum.toFixed(10);
};

/**
 * Reads the sequence of natural numbers from stdin.
 */
const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  return (!input) ? [] : input.split(/\s+/).map(Number);
};

function main() {
  const numbers = getInputs();
  let output = '';

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (!Number.isNaN(n)) {
      output += `With ${n} term(s) we get ${approximateE(n)}.\n`;
    }

    // Buffer management for performance
    if (i % 1000 === 0) {
      process.stdout.write(output);
      output = '';
    }
  }
  process.stdout.write(output);
}

if (require.main === module) {
  main();
}