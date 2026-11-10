/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 9 2026
 * @desc Sequence Statistics
 * The program reads n sequences of m real numbers and prints 
 * the minimum, maximum, and average of each sequence with 
 * four decimal places.
 */

'use strict';

const fileSystem = require('fs');

/**
 * Calcula y muestra el mínimo, máximo y media de una secuencia.
 * @param {number[]} sequence - El array de números reales.
 */
const printSequenceStats = function(sequence) {
  let min = sequence[0];
  let max = sequence[0];
  let sum = 0;

  for (const value of sequence) {
    if (value < min) min = value;
    if (value > max) max = value;
    sum += value;
  }

  const average = sum / sequence.length;

  console.log(
    `${min.toFixed(4)} ${max.toFixed(4)} ${average.toFixed(4)}`
  );
};

/**
 * Lee la entrada estándar y la convierte en una lista de números.
 * @returns {number[]} Array con todos los números de la entrada.
 */
const getInput = function() {
  const input = fileSystem.readFileSync(0, 'utf8').trim();
  if (!input) return [];
  return input.split(/\s+/).map(Number);
};

/**
 * Función principal que organiza la lectura de n secuencias.
 */
function main() {
  const data = getInput();
  if (data.length === 0) return;

  let currentIndex = 0;
  const numberOfSequences = data[currentIndex++];

  for (let i = 0; i < numberOfSequences; ++i) {
    const sequenceLength = data[currentIndex++];
    const sequence = [];

    for (let j = 0; j < sequenceLength; ++j) {
      sequence.push(data[currentIndex++]);
    }

    if (sequence.length > 0) {
      printSequenceStats(sequence);
    }
  }
}

if (require.main === module) {
  main();
}