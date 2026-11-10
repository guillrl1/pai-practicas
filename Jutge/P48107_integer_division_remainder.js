/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Jan 30 2026
 * @desc Division and Remainder
 * The program reads two integers a and b from stdin, 
 * and prints their integer division and remainder.
 */

'use strict';

const fs = require('fs');

const computeDivision = function(a, b) {
  console.log(Math.floor(a / b), a % b);
}

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').split(/\s+/);
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  return { a, b };
}

function main() {
  const { a, b } = getInputs();
  if (!Number.isNaN(a) && !Number.isNaN(b)) {
    computeDivision(a, b);
  }
}

if (require.main === module) {
  main();
}