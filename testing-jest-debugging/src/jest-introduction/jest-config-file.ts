/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    10-jest-config-file.ts
 * @author  Raúl González Acosta (alumno)
 * @date    18/02/2026
 * @desc    Jest configuration file to set up testing environment for TypeScript
 */

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default config;
