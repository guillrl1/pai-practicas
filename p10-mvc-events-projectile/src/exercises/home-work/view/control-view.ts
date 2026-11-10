/**
 * @file control-view.ts
 * @description Gestiona la interacción del usuario. 
 * Se ha eliminado la herencia de CanvasView porque P3 usa elementos HTML, no un canvas.
 */
export class ControlView {
  private readonly animateButton: HTMLButtonElement;
  private readonly inputVelocity: HTMLInputElement;
  private readonly inputAngle: HTMLInputElement;
  private readonly inputHeight: HTMLInputElement;
  private readonly checkboxPath: HTMLInputElement;

  constructor() {
    // Capturamos directamente los elementos del formulario.
    this.animateButton = document.getElementById('btn-animate') as HTMLButtonElement;
    this.inputVelocity = document.getElementById('in-velocity') as HTMLInputElement;
    this.inputAngle = document.getElementById('in-angle') as HTMLInputElement;
    this.inputHeight = document.getElementById('in-height') as HTMLInputElement;
    this.checkboxPath = document.getElementById('check-path') as HTMLInputElement;

    if (!this.animateButton || !this.inputVelocity) {
      throw new Error("No se encontraron los controles HTML en el panel P3.");
    }
  }

  public getSimulationParams() {
    return {
      velocity: parseFloat(this.inputVelocity.value),
      angle: parseFloat(this.inputAngle.value),
      height: parseFloat(this.inputHeight.value),
      showPath: this.checkboxPath.checked
    };
  }

  public onAnimate(callback: () => void): void {
    this.animateButton.addEventListener('click', callback);
  }
}