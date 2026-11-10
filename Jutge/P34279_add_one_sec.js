// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

// let hours = parseInt(input[0]);
// let minutes = parseInt(input[1]);
// let seconds = parseInt(input[2]);

// const format = (num) => String(num).padStart(2, '0');
// 

/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Jan 30 2026
 * @desc Add one second
 * The program reads a clock time (h, m, s) and prints 
 * the time corresponding to adding one second.
 */

'use strict';

const fs = require('fs');

const addOneSecond = function(hours, minutes, seconds) {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) 
        hours = 0;
    }
  }
  console.log(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
}

const format = (num) => String(num).padStart(2, '0');

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').split(/\s+/);
  const hours = parseInt(input[0]);
  const minutes = parseInt(input[1]);
  const seconds = parseInt(input[2]);
  return { hours, minutes, seconds };
}

function main() {
  const { hours, minutes, seconds } = getInputs();
  if (!Number.isNaN(hours) && !Number.isNaN(minutes) && !Number.isNaN(seconds)) {
    addOneSecond(hours, minutes, seconds);
  }
}

if (require.main === module) {
  main();
}