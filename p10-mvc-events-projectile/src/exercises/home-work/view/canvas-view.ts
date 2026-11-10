/**
 * @file canvas-view.ts
 * @author Guillermo López Concepción
 * @description Clase base con soporte HiDPI. El resize NO se llama en el
 *   constructor porque en ese momento el layout de la tabla aún no está
 *   calculado y getBoundingClientRect devuelve 0. Cada subclase debe llamar
 *   a resize() una vez que el DOM esté listo (DOMContentLoaded / después de
 *   que app-setup.js haya construido todos los objetos).
 */

export abstract class CanvasView {
  protected readonly canvas: HTMLCanvasElement;
  protected readonly context: CanvasRenderingContext2D;

  /** Dimensiones CSS actuales (píxeles lógicos, sin multiplicar por DPR). */
  protected cssWidth: number = 0;
  protected cssHeight: number = 0;

  constructor(canvasId: string) {
    const el = document.getElementById(canvasId);
    if (!el) throw new Error(`Canvas no encontrado: #${canvasId}`);
    this.canvas = el as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d')!;
  }

  /**
   * @description Ajusta el bitmap interno al tamaño real del elemento CSS.
   *   Debe invocarse después de que el navegador haya completado el layout.
   */
  public resize(): void {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) {
      // Protección: si el layout aún no asignó tamaño, usamos el tamaño
      // del padre como fallback para no trabajar con resolución 0.
      const parent = this.canvas.parentElement;
      this.cssWidth = parent?.clientWidth ?? 300;
      this.cssHeight = parent?.clientHeight ?? 200;
    } else {
      this.cssWidth = rect.width;
      this.cssHeight = rect.height;
    }

    this.canvas.width = this.cssWidth * dpr;
    this.canvas.height = this.cssHeight * dpr;

    // Reseteamos la transformación antes de escalar para evitar acumulación
    this.context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  /** Borra todo el canvas. */
  public clear(): void {
    this.context.clearRect(0, 0, this.cssWidth, this.cssHeight);
  }
}