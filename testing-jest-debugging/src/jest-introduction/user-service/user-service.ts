/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    user-service.ts
 * @author  Guillermo López Concepción
 * @date    16/02/2026
 * @desc    Handles user-related data structures and logic.
 */

export interface User {
  id: number;
  roles: string[];
  active: boolean;
}

/**
 * Generates a default admin user.
 * @return {User} An admin user object.
 */
export function getAdminUser(): User {
  return {
    id: 1,
    roles: ['admin', 'editor'],
    active: true,
  };
}