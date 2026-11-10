/**
 * Universidad de La Laguna
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 2025/2026
 * 
 * @author Guillermo López Concepción
 * @description Clase FunctionRenderer para gestionar el canvas y renderizar funciones matemáticas,
 *              utilizando AxisRenderer para los ejes y FunctionRenderer para las funciones.
 */
import {Renderer} from './renderer-interface.js';
import {CoordinateSystem} from './coordinate-system.js';

/**
 * @description Tipo MathFunction que representa una función matemática que toma un número x y devuelve un número y.
 */
export type MathFunction = (x: number) => number;

/**
 * @description Clase FunctionRenderer para renderizar una función matemática en el canvas, utilizando un sistema de coordenadas para convertir las coordenadas matemáticas a coordenadas de canvas.
 *              Implementa la interfaz Renderer, lo que permite que sea utilizada por FunctionPlotter para renderizar múltiples funciones en el mismo canvas.
 */
export class FunctionRenderer implements Renderer {
  constructor(
    private readonly coordinateSystem: CoordinateSystem,
    private readonly mathFunction: MathFunction,
    private readonly color: string = 'steelblue',
  ) {}

  /**
   * @description Renderiza la función matemática en el canvas, iterando sobre un rango de valores de x definidos por el sistema de coordenadas y calculando los correspondientes valores de y utilizando la función matemática.
   * @param context El contexto de renderizado del canvas donde se dibujará la función matemática. El método traza una línea continua para la función, manejando discontinuidades y valores no finitos adecuadamente.
   */
  render(context: CanvasRenderingContext2D): void {
    const {coordinateSystem, mathFunction} = this;
    const steps = coordinateSystem.plotWidth() * 2;
    const dx = (coordinateSystem.getXMax() - coordinateSystem.getXMin()) / steps;

    context.save();
    context.strokeStyle = this.color;
    context.lineWidth = 2;
    context.lineJoin = 'round';
    context.beginPath();

    let penDown = false;

    for (let i = 0; i <= steps; i++) {
      const mathX = coordinateSystem.getXMin() + i * dx;
      let mathY: number;
      try { mathY = mathFunction(mathX); } catch { mathY = NaN; }

      if (!isFinite(mathY) || isNaN(mathY)) {
        penDown = false;
        continue;
      }

      const canvasCoordinateX = coordinateSystem.toCanvasX(mathX);
      const canvasCoordinateY = coordinateSystem.toCanvasY(mathY);

      if (!penDown) { context.moveTo(canvasCoordinateX, canvasCoordinateY); penDown = true; }
      else { context.lineTo(canvasCoordinateX, canvasCoordinateY); }
    }

    context.stroke();
    context.restore();
  }
}