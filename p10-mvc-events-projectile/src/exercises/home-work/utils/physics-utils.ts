/**
 * @file physics-utils.ts
 * @author Guillermo López Concepción
 * @description Constantes y utilidades matemáticas para la simulación.
 */

export const GRAVITY = 9.81; // m/s^2

/**
 * @description Convierte grados a radianes.
 * @param {number} degrees - Ángulo en grados.
 * @returns {number} Ángulo en radianes.
 */
export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}