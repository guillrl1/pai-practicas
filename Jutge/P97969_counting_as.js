/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Count 'a's in a sequence
 * The program reads a sequence of characters ended with a period
 * and prints the number of times the letter 'a' appears.
 */

'use strict';

const fs = require('fs');

const countAs = function(sequence) {
  let counter = 0;
  for (let i = 0; i < sequence.length; ++i) {
    const char = sequence[i];
    if (char === '.') {
      break;
    }
    if (char === 'a') {
      ++counter;
    }
  }
  return counter;
}

const getInputs = function() {
  return fs.readFileSync(0, 'utf8');
}

function main() {
  const sequence = getInputs();
  if (sequence) {
    const result = countAs(sequence);
    console.log(result);
  }
}

if (require.main === module) {
  main();
}