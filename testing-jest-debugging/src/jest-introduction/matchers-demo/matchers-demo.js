/**
* Universidad de La Laguna (ULL)
* Escuela Superior de Ingeniería y Tecnología (ESIT)
* Grado en Ingeniería Informática
* Programación de Aplicaciones Interactivas (PAI)
*
* @file    matchers-demo.js
* @author  Guillermo López Concepción
* @date    16/02/2026
* @desc    A collection of utility functions to demonstrate Jest matchers.
*/

'use strict';

/**
* Returns an array of programming languages.
* @return {string[]} A list of languages.
*/
function getLanguages() {
return ['JavaScript', 'TypeScript', 'Python', 'C++'];
}

/**
* Checks if a number is positive.
* @param {number} value The number to check.
* @return {boolean} True if positive, false otherwise.
* @throws {Error} If the input is not a number.
*/
function isPositive(value) {
if (typeof value !== 'number') {
  throw new Error('Invalid input');
}
return value > 0;
}

module.exports = {getLanguages, isPositive};