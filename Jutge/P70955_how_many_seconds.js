/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Jan 30 2026
 * @desc Time to Seconds Converter
 * The program reads years, days, hours, minutes and seconds
 * and converts the total amount into seconds.
 */

'use strict';

const fs = require('fs');

const convertToSeconds = function(years, days, hours, minutes, seconds) {
  const secondsInMinutes = 60;
  const secondsInHours = 60 * secondsInMinutes;
  const secondsInDays = 24 * secondsInHours;
  const secondsInYears = 365 * secondsInDays;

  const totalSeconds = years * secondsInYears + 
                       days * secondsInDays +
                       hours * secondsInHours +
                       minutes * secondsInMinutes+
                       seconds;

  console.log(totalSeconds);
}

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
  return input.map(Number);
}

function main() {
  const [years, days, hours, minutes, seconds] = getInputs();
  convertToSeconds(years, days, hours, minutes, seconds);
}

if(require.main === module) {
  main();
}