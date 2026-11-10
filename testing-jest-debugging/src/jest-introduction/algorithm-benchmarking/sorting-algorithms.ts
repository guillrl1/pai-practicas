/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    sorting.ts
 * @author  Guillermo López Concepción
 * @date    22/02/2026
 * @desc    Implementation of sorting algorithms to demonstrate 
 * performance benchmarking.
 */

/** QuickSort: O(n log n) in average, O(n^2) in worst case */
export function quickSort(array: number[]): number[] {
  if (array.length <= 1) return array;
  const pivot = array[Math.floor(array.length / 2)];
  const left = array.filter(x => x < pivot);
  const middle = array.filter(x => x === pivot);
  const right = array.filter(x => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

/** MergeSort: Always O(n log n) */
export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  const merge = (l: number[], r: number[]): number[] => {
    let result = [], i = 0, j = 0;
    while (i < l.length && j < r.length) {
      result.push(l[i] < r[j] ? l[i++] : r[j++]);
    }
    return [...result, ...l.slice(i), ...r.slice(j)];
  };
  return merge(left, right);
}

/** BubbleSort: O(n^2) in average and worst case*/
export function bubbleSort(array: number[]): number[] {
  const result = [...array];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}