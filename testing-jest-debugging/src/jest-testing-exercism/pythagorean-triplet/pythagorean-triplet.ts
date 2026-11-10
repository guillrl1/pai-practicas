/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    pythagorean-triplet.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Pythagorean Triplet finder in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/pythagorean-triplet
 */

/**
 * @desc Options for finding Pythagorean triplets.
 */
type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

/**
 * @desc Represents a Pythagorean triplet (a² + b² = c²).
 */
class Triplet {
  private sideA_: number;
  private sideB_: number;
  private sideC_: number;

  /**
   * @desc Creates a Triplet instance.
   * @param {number} sideA - First side of the triplet.
   * @param {number} sideB - Second side of the triplet.
   * @param {number} sideC - Hypotenuse of the triplet.
   */
  constructor(sideA: number, sideB: number, sideC: number) {
    this.sideA_ = sideA;
    this.sideB_ = sideB;
    this.sideC_ = sideC;
  }

  /**
   * @desc Returns the first side of the triplet.
   * @returns {number} The first side.
   */
  get sideA(): number {
    return this.sideA_;
  }

  /**
   * @desc Returns the second side of the triplet.
   * @returns {number} The second side.
   */
  get sideB(): number {
    return this.sideB_;
  }

  /**
   * @desc Returns the hypotenuse of the triplet.
   * @returns {number} The hypotenuse.
   */
  get sideC(): number {
    return this.sideC_;
  }

  /**
   * @desc Returns the triplet as an array.
   * @returns {[number, number, number]} Array containing [a, b, c].
   */
  toArray(): [number, number, number] {
    return [this.sideA_, this.sideB_, this.sideC_];
  }
}

/**
 * @desc Finds all Pythagorean triplets that sum to a given value.
 * @param {Options} options - Options with sum and optional min/max factors.
 * @returns {Triplet[]} Array of Triplet objects satisfying the conditions.
 */
export function triplets({
  sum,
  maxFactor = Math.ceil(sum / 2) - 1,
  minFactor = 1,
}: Options): Triplet[] {
  const tripletList: Triplet[] = [];

  for (let firstLeg = maxFactor; firstLeg > minFactor + 1; firstLeg--) {
    for (let secondLeg = firstLeg - 1; secondLeg > minFactor + 1; secondLeg--) {
      const hypotenuse = sum - firstLeg - secondLeg;
      if (hypotenuse <= maxFactor && hypotenuse >= minFactor && 
          firstLeg * firstLeg + secondLeg * secondLeg === hypotenuse * hypotenuse) {
        tripletList.push(new Triplet(firstLeg, secondLeg, hypotenuse));
      }
    }
  }

  return tripletList;
}