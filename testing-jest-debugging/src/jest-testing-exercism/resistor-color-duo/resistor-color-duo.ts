/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    resistor-color-duo.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Resistor Color Duo in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/resistor-color-duo
 */

/**
 * @desc Array of color names indexed by their resistor color code value.
 */
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

/**
 * @desc Returns the color code (index) of a given color.
 * @param {string} color - The color name.
 * @returns {number} The numeric code of the color.
 */
const colorCode = (color: string): number => COLORS.indexOf(color)

/**
 * @desc Decodes the resistance value from two color bands.
 * @param {string[]} colors - Array with two color names [first, second].
 * @returns {number} The decoded resistance value.
 */
export const decodedValue = ([first, second]: string[]): number => 
  (colorCode(first) * 10 + colorCode(second))
