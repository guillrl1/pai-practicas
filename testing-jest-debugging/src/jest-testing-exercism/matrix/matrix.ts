/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    matrix.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Matrix manipulation in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/matrix
 */

/**
 * @desc Represents a matrix and provides methods to access rows and columns.
 */
export class Matrix {
  private matrix: number[][];
  
  /**
   * @desc Creates a Matrix instance from a string representation.
   * @param {string} matrixString - String representation of the matrix with rows separated by newlines and values by spaces.
   */
  constructor(matrixString: string) {
    this.matrix = matrixString.split('\n').map(row => 
      row.split(' ').map(Number)
    );
  }
  
  /**
   * @desc Returns the rows of the matrix.
   * @returns {number[][]} The matrix rows.
   */
  get rows(): number[][] {
    return this.matrix;
  }
  
  /**
   * @desc Returns the columns of the matrix by transposing the rows.
   * @returns {number[][]} The matrix columns.
   */
  get columns(): number[][] {
    return this.matrix[0].map((_, colIndex) => 
      this.matrix.map(row => row[colIndex])
    );
  }
}
