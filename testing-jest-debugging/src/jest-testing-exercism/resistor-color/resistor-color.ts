/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    resistor-color.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Resistor Color Code in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/resistor-color
 */

/**
 * @desc Array of resistor color band names indexed by their numeric values.
 */
export const COLORS = [
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
 * @desc Returns the numeric code associated with a resistor color band.
 * @param {string} color - The color name of the resistor band.
 * @returns {number} The numeric value of the color (0-9).
 */
export const colorCode = (color: string) => {
  return COLORS.indexOf(color)
}