/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Leap Year Checker
 * The program reads a year between 1800 and 9999 and determines
 * if it is a leap year according to the Gregorian calendar rules.
 */

'use strict';

const fs = require('fs');

const isLeapYear = function(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  return year % 4 === 0;
};

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  return (!input) ? [] : input.split(/\s+/).map(Number);
};

function main() {
  const years = getInputs();
  let output = isLeapYear(years[0]) ? 'YES\n' : 'NO\n';
  process.stdout.write(output);
}

if (require.main === module) {
  main();
}