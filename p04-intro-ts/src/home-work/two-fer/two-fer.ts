/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 23 2026
 * @desc Two-fer
 * This program defines a function that returns a string formatted as "One for X, one for me."
 * where X is the name of another person. If no name is provided, it defaults to "you".
 */

export function twoFer(otherPerson?: string): string {
  if (otherPerson === undefined) otherPerson = 'you';
  return `One for ${otherPerson}, one for me.`
}
