/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    word-count.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Word Count in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/word-count
 */

/**
 * @desc Counts the occurrences of each word in a phrase.
 * @param {string} phrase - The phrase to analyze.
 * @returns {object} A Map with word counts.
 */
export function count(phrase: string): object {
  const words = new Map();
  // Any alphanumeric group character, with an optional apostrophe
  const regex = /(?:[a-zA-Z0-9](?:'[a-zA-Z0-9])*)+/g;
  
  phrase.toLowerCase().match(regex)?.forEach(word => 
    words.set(word, (words.get(word) ?? 0) + 1));
  return words;
}
