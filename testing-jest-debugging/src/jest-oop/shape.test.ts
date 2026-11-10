/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    shape.ts
 * @author  Paula Díaz Jorge
 * @date    19/02/2026
 */

import { Shape, Circle, Rectangle } from './shape';

describe('Inheritance / polymorphism checks', () => {
  test('subclass instances are also instances of the base class', () => {
    const circle = new Circle('red', 2);
    expect(circle).toBeInstanceOf(Circle);
    expect(circle).toBeInstanceOf(Shape);
  });

  test('inherited method works (getColor)', () => {
    const rectangle = new Rectangle('blue', 2, 3);
    expect(rectangle.getColor()).toBe('blue');
  });

  test('override/implementation differs per subclass (area)', () => {
    expect(new Rectangle('blue', 2, 3).area()).toBe(6);
    expect(new Circle('red', 2).area()).toBeCloseTo(12.566, 3);
  });
});
