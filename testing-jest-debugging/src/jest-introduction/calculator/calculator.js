/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    calculator.js
 * @author  Guillermo López Concepción
 * @date    16/02/2026
 * @desc    Core logic for basic arithmetic operations.
 */

'use strict';

/**
 * Adds two numbers together.
 * @param {number} firstOperand The first number.
 * @param {number} secondOperand The second number.
 * @return {number} The sum of the two operands.
 */
function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

module.exports = {add};