/**
 * Universidad de La Laguna
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 2025/2026
 * 
 * @author Guillermo López Concepción
 * @description Clase FunctionPlotter para gestionar el canvas y renderizar funciones matemáticas,
 *              utilizando AxisRenderer para los ejes y FunctionRenderer para las funciones.
 */
import {CoordinateSystem} from './coordinate-system.js';
import {AxisRenderer} from './axis-renderer.js';
import {FunctionRenderer, MathFunction} from './function-renderer.js';
import {Renderer} from './renderer-interface.js';

const PALETTE = ['black', 'goldenrod', 'steelblue', 'crimson', 'seagreen'];

/**
 * @description Clase FunctionPlotter para gestionar el canvas y renderizar funciones matemáticas,
 *              utilizando AxisRenderer para los ejes y FunctionRenderer para las funciones.
 */
export class FunctionPlotter {
  private readonly context: CanvasRenderingContext2D;
  private readonly functionRenderers: Renderer[] = [];
  private colorIndex = 0;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly xMin = -10,
    private readonly xMax = 10,
    private readonly yMin = -6,
    private readonly yMax = 6,
    private readonly padding = 50,
  ) {
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Cannot get 2D context');
    this.context = context;
  }

  /**
   * Agrega una función matemática al plotter, creando un nuevo FunctionRenderer para esa función y asignándole un color de la paleta.
   * Luego, llama al método draw() para renderizar la nueva función junto con los ejes coordenados.
   * @param mathFunction La función matemática que se desea agregar al plotter, representada como una función de JavaScript que toma un número x y devuelve un número y.
   */
  addFunction(mathFunction: MathFunction): void {
    const color = PALETTE[this.colorIndex % PALETTE.length];
    this.colorIndex++;
    this.functionRenderers.push(new FunctionRenderer(this.makeCS(), mathFunction, color));
    this.draw();
  }

  /**
   * @description Elimina todas las funciones actualmente renderizadas en el plotter, limpiando la lista de FunctionRenderers y reiniciando el índice de color.
   * Luego, llama al método draw() para limpiar el canvas y mostrar solo los ejes coordenados sin ninguna función.
   */
  clearFunctions(): void {
    this.functionRenderers.length = 0;
    this.colorIndex = 0;
    this.draw();
  }

  /**
   * @description Renderiza el contenido del plotter en el canvas, dibujando primero los ejes coordenados utilizando AxisRenderer y 
   * luego renderizando cada función matemática agregada utilizando sus respectivos FunctionRenderers.
   */
  draw(): void {
    const {canvas, context: ctx} = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cs = this.makeCS();
    new AxisRenderer(cs).render(ctx);
    for (const r of this.functionRenderers) r.render(ctx);
  }

  /**
   * @description Crea una instancia de CoordinateSystem utilizando los parámetros de configuración del FunctionPlotter (xMin, xMax, yMin, yMax, padding) y las dimensiones del canvas.
   * Esta instancia de CoordinateSystem se utiliza para convertir coordenadas matemáticas a coordenadas de canvas al renderizar los ejes y las funciones.
   * @returns Una instancia de CoordinateSystem configurada con los límites matemáticos y las dimensiones del canvas del FunctionPlotter.
   */
  private makeCS(): CoordinateSystem {
    return new CoordinateSystem(
      {xMin: this.xMin, xMax: this.xMax, yMin: this.yMin, yMax: this.yMax},
      {width: this.canvas.width, height: this.canvas.height, padding: this.padding},
    );
  }
}