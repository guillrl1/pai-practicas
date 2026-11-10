/**
 * @file projectile.ts
 * @author Guillermo López Concepción
 * @description Modelo que encapsula las ecuaciones de movimiento parabólico.
 *   No tiene ninguna dependencia del DOM ni de la Vista.
 */

/** @description Estado inmutable del proyectil en un instante dado. */
export interface ProjectileState {
  readonly x: number;
  readonly y: number;
  readonly time: number;
}

/**
 * @description Modelo de tiro parabólico bajo gravedad constante y sin
 *   resistencia del aire.
 */
export class Projectile {
  private static readonly GRAVITY = 9.81; // m/s²

  constructor(
    private readonly initialVelocity: number, // m/s
    private readonly angleDegrees: number,    // grados sexagesimales
    private readonly initialHeight: number    // metros
  ) {}

  /**
   * @description Calcula la posición del proyectil en el instante `time`.
   * @param time - Tiempo transcurrido en segundos (≥ 0).
   * @returns Estado con coordenadas en metros. `y` nunca es negativa (suelo = 0).
   */
  public getPositionAt(time: number): ProjectileState {
    const rad = this.toRadians(this.angleDegrees);
    const x = this.initialVelocity * Math.cos(rad) * time;
    const y =
      this.initialHeight +
      this.initialVelocity * Math.sin(rad) * time -
      0.5 * Projectile.GRAVITY * time * time;

    return { x, y: Math.max(0, y), time };
  }

  /**
   * @description Tiempo total de vuelo (segundos), resolviendo y(t) = 0
   *   mediante la fórmula cuadrática.
   */
  public getTotalFlightTime(): number {
    const rad = this.toRadians(this.angleDegrees);
    const vy = this.initialVelocity * Math.sin(rad);
    return (
      (vy + Math.sqrt(vy * vy + 2 * Projectile.GRAVITY * this.initialHeight)) /
      Projectile.GRAVITY
    );
  }

  /**
   * @description Altura máxima alcanzada en metros.
   *   Se obtiene en t* = vy / g (vértice de la parábola).
   */
  public getMaxHeight(): number {
    const rad = this.toRadians(this.angleDegrees);
    const vy = this.initialVelocity * Math.sin(rad);
    const tPeak = vy / Projectile.GRAVITY;
    return this.getPositionAt(tPeak).y;
  }

  // ─── Privado ────────────────────────────────────────────────────────────────

  private toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}