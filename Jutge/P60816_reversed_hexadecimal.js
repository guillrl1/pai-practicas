/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 3 2026
 * @desc Reversed Hexadecimal Representation (Functional Approach)
 * The program converts a natural number to its reversed hexadecimal
 * representation using functional programming principles.
 */

'use strict';

const fs = require('fs');

/**
 * Converts a decimal number to its hexadecimal string and reverses it.
 * @param {number} decimal - The number to convert.
 * @returns {string}
 */
const getReversedHex = (decimal) => 
  decimal
    .toString(16)      // Convierte a hexadecimal (minúsculas por defecto)
    .toUpperCase()     // Asegura mayúsculas A-F según convención
    .split('')         // Convierte el string en un Array
    .reverse()         // Invierte el Array
    .join('');         // Lo vuelve a unir en un string

/**
 * Reads input from stdin.
 */
const getInputs = () => fs.readFileSync(0, 'utf8').trim();

function main() {
  const input = getInputs();
  
  if (input !== '') {
    const decimal = Number(input);
    if (!Number.isNaN(decimal)) {
      const result = getReversedHex(decimal);
      process.stdout.write(result + '\n');
    }
  }
}

if (require.main === module) {
  main();
}