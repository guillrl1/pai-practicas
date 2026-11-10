/**
 * Universidad de La Laguna
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 2025/2026
 * 
 * @author Guillermo López Concepción
 * @description Archivo main.ts para gestionar la interacción con el usuario, parsear las funciones
 *              introducidas y renderizarlas utilizando FunctionPlotter.
 */
import {FunctionPlotter} from './function-plotter.js';
import * as math from 'mathjs';

const canvas = document.getElementById('plot') as HTMLCanvasElement;
const input = document.getElementById('expr') as HTMLInputElement;
const preset = document.getElementById('preset') as HTMLSelectElement;
const plotter = new FunctionPlotter(canvas);

/**
 * @description Función parseAndDraw para parsear la expresión matemática introducida por el usuario, compilarla utilizando math.js y agregarla al FunctionPlotter para su renderizado.
 * @param expr La expresión matemática introducida por el usuario, representada como una cadena de texto (por ejemplo, "sin(x)", "x^2", etc.).
 */
function parseAndDraw(expr: string): void {
  try {
    const compiled = math.parse(expr).compile();
    const fn = (x: number) => compiled.evaluate({x}) as number;
    fn(0);
    plotter.addFunction(fn);
  } catch (err) {
    alert(`Expresión inválida: ${(err as Error).message}`);
  }
}

document.getElementById('btn')!.addEventListener('click', () => {
  parseAndDraw(input.value.trim());
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') parseAndDraw(input.value.trim());
});

document.getElementById('clearBtn')!.addEventListener('click', () => {
  plotter.clearFunctions();
});

preset.addEventListener('change', () => {
  if (preset.value) {
    input.value = preset.value;
    preset.value = '';
  }
});

parseAndDraw('sin(x)');