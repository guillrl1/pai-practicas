/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Interval Intersection
 * The program computes the intersection of two intervals [a1, b1] and [a2, b2].
 * If the intersection is empty, it prints [].
 */

'use strict';

const fs = require('fs');

const computeIntervalIntersection = function(a1, b1, a2, b2) {
  const start = Math.max(a1, b1);
  const end = Math.min(a2, b2);
  
  if (start > end) {
    console.log('[]');
  } 
  else {
    console.log(`[${start},${end}]`);
  }
}

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
  return input.map(Number);
}

function main() {
  const [a1, a2, b1, b2] = getInputs();
  if (a1 !== undefined && b2 !== undefined) {
    computeIntervalIntersection(a1, b1, a2, b2);
  }
}

if(require.main === module) {
  main();
}