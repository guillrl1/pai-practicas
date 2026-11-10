/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 3 2026
 * @desc Multiplication Table
 * The program reads a natural number n and prints the first n lines
 * of its multiplication table.
 */

'use strict';

const fs = require('fs');

/**
 * Prints the multiplication table of n up to n.
 * @param {number} n - The base number for the table.
 */
const printMultiplicationTable = function(n) {
  let output = '';
  for (let i = 1; i <= n; i++) {
    output += `${n} x ${i} = ${n * i}\n`;
    
    // Optimización de salida para n muy grandes
    if (i % 1000 === 0) {
      process.stdout.write(output);
      output = '';
    }
  }
  process.stdout.write(output);
};

/**
 * Reads n from stdin.
 */
const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  return Number(input);
};

function main() {
  const n = getInputs();
  if (!Number.isNaN(n) && n > 0) {
    printMultiplicationTable(n);
  }
}

if (require.main === module) {
  main();
}