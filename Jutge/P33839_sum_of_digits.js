/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Sum of digits
 * The program reads a sequence of natural numbers and prints
 * the sum of the digits of each one.
 */

'use strict';

const fs = require('fs');

const sumOfDigits = function(numberStr) {
  let sum = 0;
  for (const digit of numberStr) {
    sum += Number(digit);
  }
  return `The sum of the digits of ${numberStr} is ${sum}.`;
}

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  return (!input) ? [] : input.split(/\s+/);
}

function main() {
  const numbers = getInputs();
  let results = '';
  for (const numberStr of numbers) {
    results += sumOfDigits(numberStr) + '\n';
  }
  console.log(results.trim());
}

if (require.main === module) {
  main();
}