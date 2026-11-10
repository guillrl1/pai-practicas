/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    rna-transcription.ts
 * @author  Raúl Gonzalez Acosta
 * @date    15/02/2026
 * @brief   RNA Transcription in TypeScript.
 * @see     https://exercism.org/tracks/typescript/exercises/rna-transcription
 */

/**
 * @desc Transcribes a DNA string to its RNA complement.
 * @param {string} dna - The DNA sequence to transcribe.
 * @returns {string} The RNA transcription.
 * @throws {Error} If the input contains invalid DNA nucleotides.
 */
export function toRna(dna: string): string {
  const dnaToRnaMap: Record<string, string> = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A',
  };

  let rna = '';
  for (let i = 0; i < dna.length; i++) {
    const rnaNucleotide = dnaToRnaMap[dna[i]];
    if (!rnaNucleotide) {
      throw new Error('Invalid input DNA.');
    }
    rna += rnaNucleotide;
  }

  return rna;
}
