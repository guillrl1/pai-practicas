/**
 * Universidad de La Laguna
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 2025/2026
 * 
 * @author Guillermo López Concepción
 * @description Interfaz Renderer para definir el método render que deben implementar los renderizadores
 *              de ejes y funciones, permitiendo una arquitectura modular y extensible.
 */
export interface Renderer {
  render(ctx: CanvasRenderingContext2D): void;
}