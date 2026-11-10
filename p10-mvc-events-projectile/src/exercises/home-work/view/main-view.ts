/**
 * @file main-view.ts
 * @author Guillermo López Concepción
 * @description Vista P1 optimizada para ocupar el máximo espacio visual.
 */

import { CanvasView } from './canvas-view.js';
import { degreesToRadians } from '../utils/physics-utils.js';

export class MainView extends CanvasView {
  private scale: number = 1;
  private readonly margin = 55; // Margen optimizado para etiquetas

  private worldRangeX: number = 0;
  private worldRangeY: number = 0;
  private scaleFixed: boolean = false;

  constructor(canvasId: string) {
    super(canvasId);
  }

  public override resize(): void {
    super.resize();
    if (this.scaleFixed) {
      this.recalculateScale();
      this.clearAll();
    }
  }

  public setWorldRange(rangeX: number, rangeY: number): void {
    if (this.scaleFixed) return;
    // Margen del 5% para maximizar el tamaño del eje
    this.worldRangeX = rangeX * 1.05;
    this.worldRangeY = rangeY * 1.05;
    this.scaleFixed = true;
    this.recalculateScale();
    this.clearAll();
  }

  public isScaleFixed(): boolean { return this.scaleFixed; }

  public resetScale(): void {
    this.scaleFixed = false;
    this.worldRangeX = 0;
    this.worldRangeY = 0;
    this.clear();
  }

  public clearAll(): void {
    this.clear();
    if (this.scaleFixed) {
      this.drawAxes();
    }
  }

  private drawAxes(): void {
    const context = this.context;
    const baseY = this.cssHeight - this.margin;
    const maxX = this.margin + (this.worldRangeX * this.scale);
    const maxY = baseY - (this.worldRangeY * this.scale);

    context.save();
    context.strokeStyle = 'steelblue';
    context.lineWidth = 2;
    context.fillStyle = 'steelblue';
    context.font = 'bold 12px Arial';

    // Ejes
    context.beginPath();
    context.moveTo(this.margin, baseY);
    context.lineTo(this.margin, maxY);
    context.moveTo(this.margin, baseY);
    context.lineTo(maxX, baseY);
    context.stroke();

    context.font = '11px Arial';
    const divisions = 8; // Más divisiones para aprovechar el tamaño
    
    for (let i = 0; i <= divisions; i++) {
      const xVal = (this.worldRangeX / divisions) * i;
      const sX = this.margin + (xVal * this.scale);
      context.fillText(xVal.toFixed(0), sX - 5, baseY + 18);

      const yVal = (this.worldRangeY / divisions) * i;
      const sY = baseY - (yVal * this.scale);
      context.fillText(yVal.toFixed(0), this.margin - 35, sY + 4);
    }

    context.font = 'bold 13px Arial';
    context.fillText('X (m)', maxX + 10, baseY + 5);
    context.fillText('Y (m)', this.margin - 10, maxY - 15);
    context.restore();
  }

  public drawProjectile(x: number, y: number, color: string): void {
    const s = this.toScreen(x, y);
    this.context.beginPath();
    this.context.arc(s.x, s.y, 5, 0, Math.PI * 2);
    this.context.fillStyle = color;
    this.context.fill();
    this.context.strokeStyle = 'black';
    this.context.stroke();
  }

  public drawCannon(h0: number, angleDeg: number): void {
    const start = this.toScreen(0, h0);
    const rad = degreesToRadians(angleDeg);
    const len = 35;
    this.context.strokeStyle = 'steelblue';
    this.context.lineWidth = 4;
    this.context.beginPath();
    this.context.moveTo(start.x, start.y);
    this.context.lineTo(start.x + len * Math.cos(rad), start.y - len * Math.sin(rad));
    this.context.stroke();
  }

  private recalculateScale(): void {
    // Usamos casi todo el ancho disponible
    const availW = this.cssWidth - this.margin - 40;
    const availH = this.cssHeight - this.margin - 40;
    this.scale = Math.min(availW / this.worldRangeX, availH / this.worldRangeY);
  }

  private toScreen(x: number, y: number): { x: number, y: number } {
    return {
      x: this.margin + (x * this.scale),
      y: (this.cssHeight - this.margin) - (y * this.scale)
    };
  }
}