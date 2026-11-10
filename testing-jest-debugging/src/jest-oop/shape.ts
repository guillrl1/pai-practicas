/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    shape.ts
 * @author  Paula Díaz Jorge
 * @date    19/02/2026
 * @desc    A simple example of an abstract class representing geometric shapes, 
 *          with concrete implementations for circles and rectangles.
 */

/**
 * @desc A simple example of an abstract class representing geometric shapes, 
 *       with concrete implementations for circles and rectangles.
 */
export abstract class Shape {
  constructor(protected color: string) {}

  /** @desc  Returns the color of the shape. */
  getColor() {
    return this.color;
  }

  /** @desc  Returns the area of the shape. */
  getArea() {
    return this.area();
  }

  /** @desc  Returns a string representation of the shape. */
  toString() {
    return `Shape(color: ${this.color})`;
  }

  /**
   * @desc  Abstract method to calculate the area of the shape. Must be implemented by subclasses.
   * @returns area of the shape
   */
  abstract area(): number;
}

/**
 * @desc  A concrete implementation of Shape representing a circle, 
 *        with a radius and an area calculation.
 */
export class Circle extends Shape {
  constructor(color: string, private radius: number) {
    super(color);
  }

  /**
   * @desc  Calculates the area of the circle using the formula πr².
   * @returns area of the circle
   */
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

/**
 * @desc  A concrete implementation of Shape representing a rectangle, 
 *        with width, height and an area calculation.
 */
export class Rectangle extends Shape {
  constructor(color: string, private width: number, private height: number) {
    super(color);
  }

  /**
   * @desc  Calculates the area of the rectangle using the formula width × height.
   * @returns area of the rectangle
   */
  area() {
    return this.width * this.height;
  }
}