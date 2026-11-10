/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 6 2026
 * @desc Palindrome Checker (Efficient)
 * Checks if a string is a palindrome by comparing characters 
 * from the ends towards the center.
 */

'use strict';

const { get } = require("node:http");

/**
 * Determines if a string is a palindrome.
 * @param {string} s - The string to check.
 * @returns {boolean} - True if palindrome, false otherwise.
 */
const isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }
  return true;
};

const getInput = function() {
  return require('fs').readFileSync(0, 'utf8').trim();
};

/**
 * Example of how to use it with input processing
 */
function main() {
  let input = getInput();
  if (input !== "") {
    if (isPalindrome(input)) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
}

if (require.main === module) {
  main();
}
