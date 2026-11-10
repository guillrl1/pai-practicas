/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Guillermo López Concepción
 * @description Clase CoordinateSystem para convertir coordenadas matemáticas a coordenadas de canvas.
 */

/**
 * @description Interfaz que representa el rango de coordenadas matemáticas a visualizar en el canvas.
 */
export interface MathViewport {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

/**
 * @description Interfaz que representa las dimensiones del canvas y el padding a utilizar para el sistema de coordenadas.
 */
export interface CanvasViewport {
  width: number;
  height: number;
  padding: number;
}

/**
 * @description Clase CoordinateSystem para convertir coordenadas matemáticas a coordenadas de canvas.
 *              Proporciona métodos para obtener los límites del sistema de coordenadas matemáticas,
 *              así como métodos para convertir coordenadas matemáticas (x, y) a coordenadas de canvas (cx, cy).
 */
export class CoordinateSystem {
  constructor(
    private readonly math: MathViewport,
    private readonly canvas: CanvasViewport,
  ) { }

  getXMin(): number { return this.math.xMin; }
  getXMax(): number { return this.math.xMax; }
  getYMin(): number { return this.math.yMin; }
  getYMax(): number { return this.math.yMax; }

  plotWidth(): number { return this.canvas.width - 2 * this.canvas.padding; }

  /**
   * Convierte una coordenada matemática x (en el rango [xMin, xMax]) a una coordenada de canvas cx (en el rango [padding, width - padding]).
   * @param mx La coordenada matemática x que se desea convertir a coordenada de canvas.
   * @returns La coordenada de canvas cx correspondiente a la coordenada matemática x dada, ajustada al rango del canvas y considerando el padding.
   */
  toCanvasX(mx: number): number {
    return this.canvas.padding +
      (mx - this.math.xMin) / (this.math.xMax - this.math.xMin) * this.plotWidth();
  }

  /**
   * Convierte una coordenada matemática y (en el rango [yMin, yMax]) a una coordenada de canvas cy (en el rango [height - padding, padding]).
   * @param my La coordenada matemática y que se desea convertir a coordenada de canvas.
   * @returns La coordenada de canvas cy correspondiente a la coordenada matemática y dada, ajustada al rango del canvas y considerando el padding.
   */
  toCanvasY(my: number): number {
    return this.canvas.padding +
      (1 - (my - this.math.yMin) / (this.math.yMax - this.math.yMin)) * this.plotHeight();
  }

  /**
   * Devuelve las coordenadas de canvas (cx, cy) correspondientes al origen de coordenadas matemáticas (0, 0).
   * @returns Un objeto con las propiedades originX y originY que representan las coordenadas de canvas (cx, cy) del origen de coordenadas matemáticas.
   */
  originX(): number { return this.toCanvasX(0); }
  originY(): number { return this.toCanvasY(0); }

  /**
   * Calcula el ancho del área de dibujo en el canvas, restando el padding a ambos lados del ancho total del canvas.
   * @returns El ancho del área de dibujo en el canvas, considerando el padding.
   */
  private plotHeight(): number { return this.canvas.height - 2 * this.canvas.padding; }
}