/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)

 * @file    P76024_SumOfFractions.test.ts
 * @author  Raúl Gonzalez Acosta
 * @date    10/02/2026
 * @desc    Tests the sumOfFractions function with various inputs.
 */

import {describe, test, expect} from '@jest/globals';
import { sumOfFractions } from './P76024_SumOfFractions';

/**
 * @desc Test suite for the sumOfFractions function.
 */
describe('sumOfFractions', () => {
	test('jutge input 1', () => {
		const result: number = sumOfFractions(1, 3, 1);
    expect(result).toEqual(1.8333);
	});

	test('jutge input 2', () => {
		const result: number = sumOfFractions(5, 5, 2);
    expect(result).toEqual(0.2000);
	});

	test('jutge input 3', () => {
		const result: number = sumOfFractions(5, 6, 2);
		expect(result).toEqual(0.2000);
	});

	test('jutge input 4', () => {
		const result: number = sumOfFractions(5, 7, 2);
    expect(result).toEqual(0.3429);
	});
});

