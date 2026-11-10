/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    sorting-algorithms.test.ts
 * @author  Guillermo López Concepción
 * @date    22/02/2026
 * @desc    Performance benchmarking tests for sorting algorithms using Jest.
 */

import { quickSort, mergeSort, bubbleSort } from './sorting-algorithms';

describe('Performance Budget Testing', () => {
  // Generate a large random dataset for testing
  const DATA = Array.from({ length: 5000 }, () => Math.floor(Math.random() * 10000));
  const TIME_BUDGET_MS = 25; 

  test('QuickSort should stay within time budget', () => {
    const start = performance.now();
    quickSort([...DATA]);
    const duration = performance.now() - start;
    console.log(`QuickSort: ${duration.toFixed(2)}ms`);
    expect(duration).toBeLessThanOrEqual(TIME_BUDGET_MS);
  });

  test('MergeSort should stay within time budget', () => {
    const start = performance.now();
    mergeSort([...DATA]);
    const duration = performance.now() - start;
    console.log(`MergeSort: ${duration.toFixed(2)}ms`);
    expect(duration).toBeLessThanOrEqual(TIME_BUDGET_MS);
  });

  /**
   * This test is expected to fail because BubbleSort has O(n^2) complexity,
   * which should exceed the time budget for 5000 elements.
   */
  test('BubbleSort should NOT exceed time budget (Expected to Fail)', () => {
    const start = performance.now();
    bubbleSort([...DATA]);
    const duration = performance.now() - start;
    console.log(`BubbleSort: ${duration.toFixed(2)}ms`);
    // Fail if it exceeds the budget, which is expected for BubbleSort
    expect(duration).toBeLessThanOrEqual(TIME_BUDGET_MS);
  });
});