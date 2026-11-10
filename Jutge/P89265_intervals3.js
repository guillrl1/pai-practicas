/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Interval inclusion
 * The program reads two intervals [a1, b1] and [a2, b2] and tells
 * if one is inside the other or if they are equal.
 */

'use strict';

const fs = require('fs');

const checkIntervals = function(a1, b1, a2, b2) {
  if (a1 === a2 && b1 === b2) {
    return '=';
  }
  if (a1 >= a2 && b1 <= b2) {
    return '1';
  }
  if (a2 >= a1 && b2 <= b1) {
    return '2';
  }
  return '?';
};

const computeIntervalIntersection = function(a1, b1, a2, b2) {
  const start = Math.max(a1, b1);
  const end = Math.min(a2, b2);
  
  if (start > end) {
    return('[]');
  } 
  else {
    return(`[${start},${end}]`);
  }
}

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  return (!input) ? [] : input.split(/\s+/).map(Number);
};

function main() {
  const numbers = getInputs();
  if (numbers.length < 4) return;

  const [a1, b1, a2, b2] = numbers;
  const result = checkIntervals(a1, b1, a2, b2);
  const intersection = computeIntervalIntersection(a1, b1, a2, b2);
  
  process.stdout.write(`${result}, ${intersection}\n`);
  
}

if (require.main === module) {
  main();
}