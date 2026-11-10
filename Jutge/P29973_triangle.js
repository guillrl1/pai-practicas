/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Asterisk Triangle
 * The program reads a natural number n and prints a triangle
 * of size n using asterisks.
 */

'use strict';

const fs = require('fs');

const triangle = function(size) {
  for (let i = 1; i <= size; ++i) {
    console.log("*".repeat(i));
  }
}

const getInput = function() {
  const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
  return Number(input[0]);
}

function main() {
  const size = getInput();
  if (!Number.isNaN(size)) {
    triangle(size);
  }
}

if (require.main === module) {
  main();
}