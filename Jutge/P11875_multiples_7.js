/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 1 2026
 * @desc Multiples of 7
 * The program reads n digits and prints all multiples of 7 
 * that can be formed using all of them.
 */

'use strict';

const fs = require('fs');

const getMultiplesOfSeven = function(digits) {
  const results = new Set();
  const n = digits.length;
  const used = new Array(n).fill(false);

  const generate = function(currentStr) {
    if (currentStr.length === n) {
      if (BigInt(currentStr) % 7n === 0n) {
        results.add(currentStr);
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        used[i] = true;
        generate(currentStr + digits[i]);
        used[i] = false;
      }
    }
  };

  generate('');
  return results;
};

const getInputs = function() {
  const input = fs.readFileSync(0, 'utf8').trim();
  return (!input) ? [] : input.split(/\s+/);
};

function main() {
  const tokens = getInputs();
  if (tokens.length === 0) return;

  const n = parseInt(tokens[0]);
  const digits = tokens.slice(1, n + 1);
  
  const multiples = getMultiplesOfSeven(digits);
  let output = '';

  if (multiples.size === 0) {
    output = '-\n';
  } else {
    for (const val of multiples) {
      output += `${val}\n`;
    }
  }

  process.stdout.write(output);
}

if (require.main === module) {
  main();
}