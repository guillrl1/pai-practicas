/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    crypto-square.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Crypto Square cipher implementation in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/crypto-square
 */

/**
 * @desc Implements the Crypto Square cipher algorithm.
 */
export class Crypto {
  private input: string;
  
  /**
   * @desc Creates a Crypto instance.
   * @param {string} input - The text to encrypt.
   */
  constructor(input: string) {
    this.input = input;
  }

  /**
   * @desc Returns the normalized text (alphanumeric lowercase only).
   * @returns {string} The normalized text.
   */
  get normalizedText() {
    return this.input.replace(/[\s\W]/g, '').toLowerCase();
  }

  /**
   * @desc Calculates the dimensions (rows and columns) for the square.
   * @returns {object} Object with column and row sizes.
   */
  get size() {
    const columnSize: number = Math.ceil(Math.sqrt(this.normalizedText.length));
    const rowSize: number = Math.ceil(this.normalizedText.length / columnSize);

    return {
      column: columnSize,
      row: rowSize
    }
  }

  /**
   * @desc Arranges the normalized text into a rectangle.
   * @returns {string[]} Array of strings representing rectangle rows.
   */
  get rectangle() {
    const result: string[] = [];
    for(let i = 0; i < this.size.row; i++) {
      const indexStart: number = i * this.size.column;
      const indexEnd: number= indexStart + this.size.column;

      if(indexEnd > this.normalizedText.length) {
        result.push(this.normalizedText.substring(indexStart)
                                       .padEnd(this.size.column));
      } else {
        result.push(this.normalizedText.substring(indexStart, indexEnd));
      }
    }

    return result;
  }

  /**
   * @desc Returns the encrypted cipher text by reading columns.
   * @returns {string} The encrypted text with spaces between columns.
   */
  get ciphertext() {
    const codedRectangle: string[] = [];
    for(let i = 0; i < this.size.column; i++) {
      const word: string = this.rectangle.reduce((chars, row) => chars += row[i], '');
      codedRectangle.push(word);
    }
    
    return codedRectangle.join(' ');
  }
}