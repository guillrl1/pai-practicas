/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    robot-name.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Robot Name Generator in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/robot-name
 */

/**
 * @desc Represents a robot with a unique randomly generated name.
 */
export class Robot {
  private name_: string
  public static reservedNames_: Set<string>

  /**
   * @desc Creates a new Robot instance with a unique name.
   */
  constructor() {
    Robot.reservedNames_ = new Set()
    this.name_ = this.generateName()
  }

  /**
   * @desc Gets the robot's name.
   * @returns {string} The robot's unique name.
   */
  public get name(): string {
    return this.name_
  }

  /**
   * @desc Generates a unique name for the robot.
   * @returns {string} A unique randomly generated name.
   */
  generateName(): string {
    let randomName: string
    do {
      randomName = this.randomName()
    } while (Robot.reservedNames_.has(randomName))
    Robot.reservedNames_.add(randomName)

    return randomName
  }

  /**
   * @desc Generates a random name in the format LL### (2 letters + 3 digits).
   * @returns {string} A random name.
   */
  randomName(): string {
    let name = '';
    for (let i = 0; i < 2; i++) {
      name += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    }
    for (let i = 0; i < 3; i++) {
      name += '0123456789'[Math.floor(Math.random() * 10)];
    }
    return name
  }

  /**
   * @desc Resets the robot's name to a new unique name.
   */
  public resetName(): void {
    this.name_ = this.generateName()
  }

  /**
   * @desc Clears all reserved names, allowing them to be reused.
   */
  public static releaseNames() {
    this.reservedNames_.clear()
  }
}
