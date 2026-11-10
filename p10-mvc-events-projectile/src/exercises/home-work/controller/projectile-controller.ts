/**
 * @file projectile-controller.ts
 * @author Guillermo López Concepción
 * @description Controlador con persistencia de trayectorias previas.
 */

import { Projectile } from '../model/projectile.js';
import { MainView } from '../view/main-view.js';
import { InfoView } from '../view/info-view.js';
import { ControlView } from '../view/control-view.js';

export class ProjectileController {
  private projectile?: Projectile;
  private startTime: number | null = null;
  private isAnimating: boolean = false;
  private animFrameId: number = 0;
  private readonly colors = ['#e67e22', '#2ecc71', '#3498db', '#9b59b6', '#e74c3c'];
  private colorIndex = 0;
  
  // Imagen para persistir lanzamientos anteriores cuando el rastro está OFF
  private canvasSnapshot: ImageData | null = null;

  constructor(
    private readonly mainView: MainView,
    private readonly infoView: InfoView,
    private readonly controlView: ControlView
  ) {
    this.setupListeners();
  }

  private setupListeners(): void {
    this.controlView.onAnimate(() => this.startSimulation());
    
    document.getElementById('btn-clear')?.addEventListener('click', () => {
      this.stopAnimation();
      this.mainView.resetScale();
      this.mainView.clearAll();
      this.infoView.clear();
      this.infoView.resetMaxHeight();
      this.colorIndex = 0;
      this.canvasSnapshot = null;
    });

    window.addEventListener('resize', () => {
      this.mainView.resize();
      this.infoView.resize();
      this.canvasSnapshot = null; // Snapshot invalidado por cambio de tamaño
    });
  }

  private startSimulation(): void {
    this.stopAnimation();
    const params = this.controlView.getSimulationParams();
    this.projectile = new Projectile(params.velocity, params.angle, params.height);

    if (!this.mainView.isScaleFixed()) {
      const flightTime = this.projectile.getTotalFlightTime();
      const maxX = this.projectile.getPositionAt(flightTime).x;
      const maxY = this.projectile.getMaxHeight();
      this.mainView.setWorldRange(maxX, maxY); 
    }

    // Antes de empezar, guardamos lo que hay en el canvas
    const canvas = document.getElementById('canvas-main') as HTMLCanvasElement;
    const context = canvas.getContext('2d')!;
    this.canvasSnapshot = context.getImageData(0, 0, canvas.width, canvas.height);

    this.startTime = null;
    this.isAnimating = true;
    this.infoView.resetMaxHeight();
    this.mainView.drawCannon(params.height, params.angle);
    
    this.animFrameId = requestAnimationFrame(this.animationLoop);
  }

  private stopAnimation(): void {
    this.isAnimating = false;
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
  }

  private animationLoop = (timestamp: number): void => {
    if (!this.isAnimating || !this.projectile) return;
    if (this.startTime === null) this.startTime = timestamp;

    const elapsed = (timestamp - this.startTime) / 1000;
    const state = this.projectile.getPositionAt(elapsed);
    const params = this.controlView.getSimulationParams();

    // Si rastro es OFF, restauramos el snapshot previo antes de dibujar la bola
    if (!params.showPath && this.canvasSnapshot) {
      const canvas = document.getElementById('canvas-main') as HTMLCanvasElement;
      const context = canvas.getContext('2d')!;
      context.putImageData(this.canvasSnapshot, 0, 0);
    }

    const color = this.colors[this.colorIndex % this.colors.length];
    this.mainView.drawProjectile(state.x, state.y, color);
    this.infoView.renderStats(state.time, state.x, state.y);

    if (elapsed <= this.projectile.getTotalFlightTime() + 0.02) {
      this.animFrameId = requestAnimationFrame(this.animationLoop);
    } else {
      this.isAnimating = false;
      this.colorIndex++;
    }
  };
}