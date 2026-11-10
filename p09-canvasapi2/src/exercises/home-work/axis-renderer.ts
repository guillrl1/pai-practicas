/**
 * Universidad de La Laguna
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 2025/2026
 * 
 * @author Guillermo López Concepción
 * @description Clase AxisRenderer para dibujar los ejes coordenados y la cuadrícula de fondo
 *              en el canvas, implementando la interfaz Renderer.
 */
import {Renderer} from './renderer-interface.js';
import {CoordinateSystem} from './coordinate-system.js';

export class AxisRenderer implements Renderer {
  constructor(private readonly cs: CoordinateSystem) {}

  /**
   * Renderiza los ejes coordenados y la cuadrícula de fondo en el canvas.
   * @param context El contexto de renderizado del canvas donde se dibujarán los ejes y la cuadrícula.
   */
  render(context: CanvasRenderingContext2D): void {
    context.save();
    this.drawGrid(context);
    this.drawAxes(context);
    this.drawArrows(context);
    context.restore();
  }

  /**
   * Calcula un paso "agradable" para los ticks de la cuadrícula, dado un rango y un número objetivo de ticks.
   * @param range El rango total que se desea cubrir con los ticks (por ejemplo, el rango de x o y).
   * @param targetTicks El número objetivo de ticks que se desea tener en el eje.
   * @returns Un número que representa el paso entre ticks, ajustado a un valor "agradable" (1, 2, 5, 10, etc.) multiplicado por una potencia de 10.
   */
  private niceStep(range: number, targetTicks: number): number {
    const raw = range / targetTicks;
    const magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
    const normalized = raw / magnitude;
    const nice = normalized < 1.5 ? 1 : normalized < 3.5 ? 2 :
                 normalized < 7.5 ? 5 : 10;
    return nice * magnitude;
  }

  /**
   * Dibuja la cuadrícula de fondo en el canvas, con líneas ligeras y etiquetas numéricas en los ticks.
   * @param context El contexto de renderizado del canvas donde se dibujará la cuadrícula.
   */
  private drawGrid(context: CanvasRenderingContext2D): void {
    const {cs: coordinateSystem} = this;
    const stepX = this.niceStep(coordinateSystem.getXMax() - coordinateSystem.getXMin(), 10);
    const stepY = this.niceStep(coordinateSystem.getYMax() - coordinateSystem.getYMin(), 8);

    context.strokeStyle = 'lightgray';
    context.lineWidth = 0.5;
    context.font = '11px monospace';

    for (let v = Math.ceil(coordinateSystem.getXMin() / stepX) * stepX; v <= coordinateSystem.getXMax() + 1e-9; v += stepX) {
      const cx = coordinateSystem.toCanvasX(v);
      context.beginPath();
      context.moveTo(cx, coordinateSystem.toCanvasY(coordinateSystem.getYMin()));
      context.lineTo(cx, coordinateSystem.toCanvasY(coordinateSystem.getYMax()));
      context.stroke();
      if (Math.abs(v) > 1e-9) {
        context.fillStyle = 'gray';
        context.textAlign = 'center';
        context.textBaseline = 'top';
        context.fillText(String(+v.toFixed(2)), cx, coordinateSystem.originY() + 7);
      }
    }

    for (let v = Math.ceil(coordinateSystem.getYMin() / stepY) * stepY; v <= coordinateSystem.getYMax() + 1e-9; v += stepY) {
      const cy = coordinateSystem.toCanvasY(v);
      context.beginPath();
      context.moveTo(coordinateSystem.toCanvasX(coordinateSystem.getXMin()), cy);
      context.lineTo(coordinateSystem.toCanvasX(coordinateSystem.getXMax()), cy);
      context.stroke();
      if (Math.abs(v) > 1e-9) {
        context.fillStyle = 'gray';
        context.textAlign = 'right';
        context.textBaseline = 'middle';
        context.fillText(String(+v.toFixed(2)), coordinateSystem.originX() - 7, cy);
      }
    }
  }

  /**
   * Dibuja los ejes coordenados X e Y en el canvas, con líneas más gruesas y de color "dimgray".
   * @param context El contexto de renderizado del canvas donde se dibujarán los ejes coordenados.
   */
  private drawAxes(context: CanvasRenderingContext2D): void {
    const {cs: coordinateSystem} = this;
    context.strokeStyle = 'dimgray';
    context.lineWidth = 1.5;

    context.beginPath();
    context.moveTo(coordinateSystem.toCanvasX(coordinateSystem.getXMin()), coordinateSystem.originY());
    context.lineTo(coordinateSystem.toCanvasX(coordinateSystem.getXMax()), coordinateSystem.originY());
    context.stroke();

    context.beginPath();
    context.moveTo(coordinateSystem.originX(), coordinateSystem.toCanvasY(coordinateSystem.getYMin()));
    context.lineTo(coordinateSystem.originX(), coordinateSystem.toCanvasY(coordinateSystem.getYMax()));
    context.stroke();
  }

  /**
   * Dibuja las flechas en los extremos de los ejes coordenados para indicar la dirección positiva de cada eje.
   * @param context El contexto de renderizado del canvas donde se dibujarán las flechas en los extremos de los ejes coordenados.
   */
  private drawArrows(context: CanvasRenderingContext2D): void {
    const {cs: coordinateSystem} = this;
    const arrowHeadLength = 7;
    const canvasRightEdgeX = coordinateSystem.toCanvasX(coordinateSystem.getXMax());
    const canvasOriginY = coordinateSystem.originY();
    const canvasOriginX = coordinateSystem.originX();
    const canvasTopEdgeY = coordinateSystem.toCanvasY(coordinateSystem.getYMax());

    context.fillStyle = 'dimgray';

    context.beginPath();
    context.moveTo(canvasRightEdgeX, canvasOriginY);
    context.lineTo(canvasRightEdgeX - arrowHeadLength, canvasOriginY - 4);
    context.lineTo(canvasRightEdgeX - arrowHeadLength, canvasOriginY + 4);
    context.fill();

    context.beginPath();
    context.moveTo(canvasOriginX, canvasTopEdgeY);
    context.lineTo(canvasOriginX - 4, canvasTopEdgeY + arrowHeadLength);
    context.lineTo(canvasOriginX + 4, canvasTopEdgeY + arrowHeadLength);
    context.fill();
  }
}