/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Jan 30 2026
 * @desc Maximum of three integers
 * The program reads a sequence of three numbers from stdin 
 * and prints the maximum value among them.
 */

'use strict'

const fs = require('fs');

const findMaximum = function(nums) {
  console.log(Math.max(...nums));
}

const getInputs = function() {
  const nums = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
  return { nums };
}

function main() {
  const { nums } = getInputs();
  if (Number.length === 0) return;
  findMaximum(nums);
}

if (require.main === module) {
  main();
}