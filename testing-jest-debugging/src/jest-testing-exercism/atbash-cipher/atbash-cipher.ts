/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    atbash-cipher.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Atbash Cipher implementation in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/atbash-cipher
 */

/**
 * @desc String containing all lowercase letters of the alphabet.
 */
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

/**
 * @desc Encodes plain text using the Atbash cipher, 
 *       grouping output in blocks of 5.
 * @param {string} plainText - The text to encode.
 * @returns {string} The encoded text with spaces every 5 characters.
 */
export function encode(plainText: string): string {
  return transcode(plainText).reduce((prev, value, index) => 
         prev += (index === 0) || (index % 5) ? value : ' ' + value, '');
}

/**
 * @desc Decodes cipher text using the Atbash cipher.
 * @param {string} cipherText - The text to decode.
 * @returns {string} The decoded text.
 */
export function decode(cipherText: string): string {
  return transcode(cipherText).join('');
}

/**
 * @desc Transcodes text by replacing each letter 
 *       with its reverse alphabet equivalent.
 * @param {string} text - The text to transcode.
 * @returns {string[]} Array of transcoded characters.
 */
function transcode(text: string): string[] {
  return Array.from(text.replace(/\W/g, '').toLowerCase())
              .map(character => character.match(/\d/) ? 
                   character : ALPHA.charAt(25 - ALPHA.indexOf(character)));
}