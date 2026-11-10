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

'use strict';

const fs = require('fs');

const collatz = function(n) {
  let steps = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    }
    else {
      n = (3 * n) + 1;
    }
    ++steps;
  }
  return steps;
}

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  return (!input) ? [] : input.split(/\s+/).map(Number);
}

function main() {
  const number = getInputs();
  let output = '';

  for (const n of number) {
    if (!Number.isNaN(n)) {
      output += `${collatz(n)}\n`;
    }
  }
  process.stdout.write(output);
}

if (require.main === module) {
  main();
}