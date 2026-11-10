/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 9 2026
 * @desc Harmonic Sum with Step
 * The program reads triples of natural numbers (a, b, k) and 
 * prints the sum of 1/a + 1/(a+k) + 1/(a+2k) + ... 
 * for all denominators less than or equal to b.
 */

'use strict';

const fileSystem = require('fs');

/**
 * Calcula la suma armónica con un salto k.
 * @param {number} a - Denominador inicial.
 * @param {number} b - Límite del denominador.
 * @param {number} k - Incremento del denominador.
 */
const computeHarmonicSum = function(a, b, k) {
  let sum = 0;
  for (let denominator = a; denominator <= b; denominator += k) {
    sum += 1 / denominator;
  }
  console.log(sum.toFixed(4));
};

/**
 * Lee la entrada estándar y devuelve un array de números.
 * @returns {number[]} Array con todos los números de la entrada.
 */
const getInput = function() {
  const input = fileSystem.readFileSync(0, 'utf8').trim();
  if (!input) return [];
  return input.split(/\s+/).map(Number);
};

/**
 * Función principal que procesa los triples de la entrada.
 */
function main() {
  const numbers = getInput();
  
  // Procesamos los números en grupos de tres (a, b, k)
  for (let i = 0; i < numbers.length; i += 3) {
    const a = numbers[i];
    const b = numbers[i + 1];
    const k = numbers[i + 2];

    if (!Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(k)) {
      computeHarmonicSum(a, b, k);
    }
  }
}

if (require.main === module) {
  main();
}