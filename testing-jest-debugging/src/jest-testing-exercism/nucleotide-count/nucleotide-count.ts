/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    nucleotide-count.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   Nucleotide Count in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/nucleotide-count
 */

/** 
 * @desc Counts the occurrences of each nucleotide (A, C, G, T) in a DNA chain.
 * @param {string} dnaChain - The DNA chain to analyze.
 * @returns {object} An object with the count of each nucleotide.
 * @throws {Error} If an invalid nucleotide is found in the strand.
 */
export function nucleotideCounts(dnaChain: string) {
  let nucleotides = new Map<string, number>([
    ['A', 0],
    ['C', 0],
    ['G', 0],
    ['T', 0]
  ]);

  for (let i = 0; i < dnaChain.length; i++) {
    if (nucleotides.has(dnaChain[i])) {
      nucleotides.set(dnaChain[i], nucleotides.get(dnaChain[i])! + 1);
    } else {
      throw new Error('Invalid nucleotide in strand');
    }
  }

  return {
    A: nucleotides.get('A'),
    C: nucleotides.get('C'),
    G: nucleotides.get('G'),
    T: nucleotides.get('T')
  }
}