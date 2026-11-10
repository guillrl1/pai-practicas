/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    resistor-color-trio.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Resistor Color Trio in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/resistor-color-trio
 */

/**
 * @desc Array of resistor color band names indexed by their numeric values.
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
] as const;

/**
 * @desc Type representing valid resistor color band values.
 */
export type Color = typeof COLORS[number];

/**
 * @desc Array of metric prefixes with their multipliers for resistance values.
 */
const prefixes = [
  [1_000_000_000, 'giga'],
  [1_000_000, 'mega'],
  [1000, 'kilo'],
] as const;

/**
 * @desc Decodes a three-band resistor color code to its resistance value with appropriate metric prefix.
 * @param {Color[]} colors - Array of three color band names [band1, band2, band3].
 * @returns {string} The resistance value with metric prefix and 'ohms' unit.
 */
export function decodedResistorValue([band1, band2, band3]: Color[]): string {
  const [tens, ones, zeros] = [band1, band2, band3].map((band) =>
    COLORS.indexOf(band)
  );

  let numerator = (tens * 10 + ones) * 10 ** zeros;
  const [divisor, prefix] = prefixes.find(([value]) => numerator >= value) ?? [1, ''];
  
  return `${numerator / divisor} ${prefix}ohms`;
}

