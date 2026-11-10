/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    robot-simulator.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Robot Simulator in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/robot-simulator
 */

/**
 * @class InvalidInputError
 * @extends {Error}
 * @param {string} message - Error message
 * @description Custom error class for invalid input
 * @constructor
 * @public
 */
export class InvalidInputError extends Error {
  public constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

/**
 * @type {Direction}
 * @description Type for direction
 */
type Direction = 'north' | 'east' | 'south' | 'west'

/**
 * @type {Coordinates}
 * @description Type for coordinates
 */
type Coordinates = [number, number]

/**
 * @interface ManualEntry
 * @description Interface for robot manual entry
 */
interface ManualEntry {
  left: Direction;
  right: Direction;
  advance: number[];
}

/**
 * @interface Manual
 * @description Interface for robot manual
 */
interface Manual {
  [key: string] : ManualEntry;
}
const robotManual : Manual = {
  'north': {left: 'west',  right: 'east',  advance: [0, 1]},
  'south': {left: 'east',  right: 'west',  advance: [0, -1]},
  'east':  {left: 'north', right: 'south', advance: [1, 0]},
  'west':  {left: 'south', right: 'north', advance: [-1, 0]},
}

/**
 * @class Robot
 * @description Robot class
 */
export class Robot {
  /**
   * @type {Direction}
   * @description Direction of robot
   * @private
   */
  private direction_: Direction;

  /**
   * @type {Coordinates}
   * @description Coordinates of robot
   * @private
   */
  private coordinate_ : Coordinates;

  /**
   * @constructor
   * @description Constructor for Robot class
   */
  public constructor() {
    this.direction_ = 'north';
    this.coordinate_ = [0, 0];
  }
  
  /**
   * @type {Direction}
   * @description Get bearing of robot
   * @public
   * @returns {Direction} - Direction of robot
   */
  public get bearing(): Direction {
    return this.direction_;

  }

  /**
   * @type {Coordinates}
   * @description Get coordinates of robot
   * @public
   * @returns {Coordinates} - Coordinates of robot
   */
  public get coordinates(): Coordinates {
    return this.coordinate_;
  }

  /**
   * @type {Object}
   * @description Get placement of robot
   * @public
   * @returns {Object} - Placement of robot
   * @throws {InvalidInputError} - Invalid input error
   */
  public place(placement: { x: number; y: number; direction: string }) {
    if (!['north', 'east', 'south', 'west'].includes(placement.direction)) {
      throw new InvalidInputError('invalid');
    }
    this.direction_ = placement.direction as Direction;
    this.coordinate_ = [placement.x, placement.y];
  }

  /**
   * @type {Object}
   * @description Get placement of robot
   * @public
   * @returns {Object} - Placement of robot
   */
  public evaluate(instructions: string) {
    let _this = this;
    [...instructions].forEach(function (value: string) {
      _this.evaluateSingle(value);
    }); 
  }

  /**
   * @type {Object}
   * @description Evaluate single instruction
   * @public
   * @returns {void}
   */
  public evaluateSingle(instruction: string) : void {
    switch(instruction) {
      case('A'): 
        this.move(); 
        break;
      case('L'): 
        this.direction_ = robotManual[this.direction_].left; 
        break;
      case('R'): 
        this.direction_ = robotManual[this.direction_].right; 
        break;
    }
  }

  /**
   * @type {void}
   * @description Move robot
   * @public
   * @returns {void}
   */
  public move() {
    const movement = robotManual[this.direction_].advance;
    this.coordinate_[0] += movement[0];
    this.coordinate_[1] += movement[1];
  }
}
