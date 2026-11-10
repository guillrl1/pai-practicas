/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    advanced-matchers.test.ts
 * @author  Guillermo López Concepción
 * @date    19/02/2026
 * @desc    Comprehensive guide to Truthiness and Numeric matchers in TypeScript.
 */

describe('Advanced Matchers Reference Guide', () => {
  
  /**
   * Section 1: Truthiness. 
   * These help you be explicit about what 'empty' or 'false' means.
   */
  test('Truthiness matchers demonstration', () => {
    const nullValue: null = null;
    const undefinedValue: undefined = undefined;
    const name: string = 'Luis';
    const emptyString: string = '';

    expect(nullValue).toBeNull();
    expect(undefinedValue).toBeUndefined();
    expect(name).toBeDefined();
    
    // toBeTruthy matches anything an if-statement treats as true
    expect(name).toBeTruthy(); 
    
    // toBeFalsy matches: false, 0, '', null, undefined, and NaN
    expect(emptyString).toBeFalsy();
    expect(0).toBeFalsy();
  });

  /**
   * Section 2: Numbers.
   * Useful for thresholds, scores, and mathematical boundaries.
   */
  test('Numeric matchers demonstration', () => {
    const score: number = 8.5;
    const threshold: number = 5.0;

    expect(score).toBeGreaterThan(threshold);
    expect(score).toBeGreaterThanOrEqual(8.5);
    expect(score).toBeLessThan(10);
    expect(score).toBeLessThanOrEqual(9.0);

    // Equality for numbers
    expect(score).toBe(8.5);
    expect(score).toEqual(8.5);
  });

  /**
   * Section 3: Floating Point Precision.
   * Avoids rounding errors in tests.
   */
  test('Floating point precision (toBeCloseTo)', () => {
    const value: number = 0.1 + 0.2;
    
    // expect(value).toBe(0.3); // This would FAIL in JS (0.30000000000000004)
    expect(value).toBeCloseTo(0.3, 5); // Success!
  });
});