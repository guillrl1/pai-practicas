/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    user-service.test.ts
 * @author  Guillermo López Concepción
 * @date    16/02/2026
 * @desc    Unit tests for User Service demonstrating object matchers in TS.
 */

import {expect, describe, test} from '@jest/globals';
import {getAdminUser, User} from './user-service';

describe('User Service Matchers (TS)', () => {
  /**
   * Deep equality check for objects.
   */
  test('should return the correct admin user object', () => {
    const expectedUser: User = {
      id: 1,
      roles: ['admin', 'editor'],
      active: true,
    };
    expect(getAdminUser()).toEqual(expectedUser);
  });

  /**
   * Checking specific properties within an object.
   */
  test('should have an admin role', () => {
    const user = getAdminUser();
    expect(user.roles).toContain('admin');
    expect(user).toHaveProperty('active', true);
  });

  /**
   * Using not to negate matchers.
   */
  test('should not have guest role', () => {
    const user = getAdminUser();
    expect(user.roles).not.toContain('guest');
  });
});