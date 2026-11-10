/**
 * @file main.ts
 * @author Guillermo López Concepción
 * @description Punto de entrada minimalista de la aplicación.
 */

import { initializeApp } from './app-setup.js';

/**
 * @description Ejecuta el arranque de la aplicación de forma segura.
 */
function main(): void {
  try {
    initializeApp();
    console.log('Simulación de Proyectil iniciada con éxito.');
  } catch (error) {
    console.error('Fallo en la inicialización de la aplicación:', error);
  }
}

main();