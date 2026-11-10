/**
 * @file info-view.ts
 * @author Guillermo López Concepción
 * @description Vista P2: muestra las estadísticas del vuelo (tiempo, distancia
 *   horizontal y altura máxima) en el canvas de información.
 */

import { CanvasView } from './canvas-view.js';

export class InfoView extends CanvasView {
  /** Altura máxima observada durante el vuelo actual (se resetea por lanzamiento). */
  private maxObservedHeight: number = 0;

  constructor(canvasId: string) {
    super(canvasId);
  }

  /** Reinicia la altura máxima para el siguiente lanzamiento. */
  public resetMaxHeight(): void {
    this.maxObservedHeight = 0;
  }

  /**
   * @description Renderiza las estadísticas del instante actual.
   * @param time  - Tiempo transcurrido (segundos).
   * @param x     - Distancia horizontal recorrida (metros).
   * @param y     - Altura actual (metros); se usa para actualizar el máximo.
   */
  public renderStats(time: number, x: number, y: number): void {
    if (y > this.maxObservedHeight) {
      this.maxObservedHeight = y;
    }

    this.clear();

    const context = this.context;
    context.font = '14px Arial';
    context.fillStyle = 'steelblue';

    const lineH = 28;
    const startX = 16;
    const startY = 30;

    context.fillText(`t:      ${time.toFixed(2)} s`, startX, startY);
    context.fillText(`x:      ${x.toFixed(2)} m`, startX, startY + lineH);
    context.fillText(`y máx:  ${this.maxObservedHeight.toFixed(2)} m`, startX, startY + lineH * 2);
  }
}