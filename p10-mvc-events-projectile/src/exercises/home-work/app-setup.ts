/**
 * @file app-setup.ts
 * @author Guillermo López Concepción
 * @description Función de arranque de la aplicación. Construye las vistas y el
 *   controlador, y llama a resize() UNA VEZ que el navegador ya ha calculado el
 *   layout (es decir, desde main.ts tras DOMContentLoaded).
 *
 *   Separar esta responsabilidad de main.ts mantiene el punto de entrada limpio
 *   (principio S de SOLID) y facilita los tests unitarios.
 */

import { MainView } from './view/main-view.js';
import { InfoView } from './view/info-view.js';
import { ControlView } from './view/control-view.js';
import { ProjectileController } from './controller/projectile-controller.js';

/**
 * @description Instancia todas las capas MVC y las conecta.
 *   Debe invocarse desde el listener de DOMContentLoaded para que
 *   getBoundingClientRect() devuelva valores reales en cada canvas.
 */
// En src/app-setup.ts
export function initializeApp(): void {
  const mainView = new MainView('canvas-main');
  const infoView = new InfoView('canvas-info');
  const controlView = new ControlView(); // Sin argumentos

  mainView.resize();
  infoView.resize();

  mainView.clearAll();
  new ProjectileController(mainView, infoView, controlView);
}