/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    create-user.js
 * @author  Guillermo López Concepción
 * @date    17/02/2026
 * @desc    Utility to create user objects.
 */

/**
 * Creates a user object.
 * @param {string} name 
 * @return {Object}
 */
function createUser(name) {
  return { name, active: true };
}

module.exports = { createUser };