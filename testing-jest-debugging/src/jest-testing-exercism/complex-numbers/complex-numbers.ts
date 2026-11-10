/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    complex-numbers.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Complex Numbers implementation in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/complex-numbers
 */

/**
 * @desc Represents a complex number and provides arithmetic operations.
 */
export class ComplexNumber {
  private real_: number
  private imaginary_: number

  /**
   * @desc Creates a ComplexNumber instance.
   * @param {number} real - The real part of the complex number.
   * @param {number} imaginary - The imaginary part of the complex number.
   * @throws {Error} If real or imaginary parts are not numbers.
   */
  constructor(real: number, imaginary: number) {
    if (isNaN(real) || isNaN(imaginary)) {
      throw new Error('Real and imaginary parts must be numbers')
    }

    this.real_ = real
    this.imaginary_ = imaginary
  }

  /**
   * @desc Gets the real part of the complex number.
   * @returns {number} The real part.
   */
  public get real(): number {
    return this.real_
  }

  /**
   * @desc Gets the imaginary part of the complex number.
   * @returns {number} The imaginary part.
   */
  public get imag(): number {
    return this.imaginary_
  }

  /**
   * @desc Adds another complex number to this one.
   * @param {ComplexNumber} other - The complex number to add.
   * @returns {ComplexNumber} The sum as a new ComplexNumber.
   */
  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real_ + other.real_, 
                             this.imaginary_ + other.imaginary_)
  }

  /**
   * @desc Subtracts another complex number from this one.
   * @param {ComplexNumber} other - The complex number to subtract.
   * @returns {ComplexNumber} The difference as a new ComplexNumber.
   */
  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real_ - other.real_, 
                             this.imaginary_ - other.imaginary_)
  }

  /**
   * @desc Divides this complex number by another.
   * @param {ComplexNumber} other - The complex number to divide by.
   * @returns {ComplexNumber} The quotient as a new ComplexNumber.
   * @throws {Error} If dividing by zero.
   */
  public div(other: ComplexNumber): ComplexNumber {
    const denominator = other.real_ * other.real_ + 
                        other.imaginary_ * other.imaginary_;
    if (denominator === 0) {
      throw new Error('Division by zero')
    }
    return new ComplexNumber(
      (this.real_ * other.real_ + this.imaginary_ * other.imaginary_) / denominator,
      (this.imaginary_ * other.real_ - this.real_ * other.imaginary_) / denominator
    )
  }

  /**
   * @desc Multiplies this complex number by another.
   * @param {ComplexNumber} other - The complex number to multiply by.
   * @returns {ComplexNumber} The product as a new ComplexNumber.
   */
  public mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real_ * other.real_ - this.imaginary_ * other.imaginary_,
      this.real_ * other.imaginary_ + this.imaginary_ * other.real_
    )
  }

  /**
   * @desc Calculates the absolute value (modulus) of the complex number.
   * @returns {number} The absolute value.
   */
  public get abs(): number {
    return Math.hypot(this.real_, this.imaginary_)
  }

  /**
   * @desc Calculates the complex conjugate.
   * @returns {ComplexNumber} The conjugate as a new ComplexNumber.
   */
  public get conj(): ComplexNumber {
    if (this.imaginary_ === 0) {
      return new ComplexNumber(this.real_, 0)
    }
    if (this.real_ === 0) {
      return new ComplexNumber(0, -this.imaginary_)
    }
    return new ComplexNumber(this.real_, -this.imaginary_)
  }

  /**
   * @desc Calculates Euler's number e raised to the power of this complex number.
   * @returns {ComplexNumber} e^(this) as a new ComplexNumber.
   */
  public get exp(): ComplexNumber {
    const module = Math.exp(this.real_);
    return new ComplexNumber(
      module * Math.cos(this.imaginary_),
      module * Math.sin(this.imaginary_)
    )
  }
}
