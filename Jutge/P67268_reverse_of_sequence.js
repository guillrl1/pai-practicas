/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 6 2026
 * @desc Reverse Sequences
 * The program reads several sequences (size n followed by n elements)
 * and prints each sequence in reverse order.
 */

'use strict';

const fs = require('fs');

/**
 * Reads all tokens from the standard input.
 * @returns {string[]} An array of strings representing each number/token.
 */
const getTokens = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  return (input === '') ? [] : input.split(/\s+/);
};

/**
 * Main function to process sequences and print them in reverse.
 */
function main() {
  const tokens = getTokens();
  let pointer = 0;

  while (pointer < tokens.length) {
    // Read the size of the current sequence
    const n = parseInt(tokens[pointer++], 10);
    
    const sequence = [];
    for (let i = 0; i < n; i++) {
      sequence.push(tokens[pointer++]);
    }

    // Invert and print the sequence
    process.stdout.write(sequence.reverse().join(' ') + '\n');
  }
}

if (require.main === module) {
  main();
}