/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    09-user.test.ts
 * @author  Raúl González Acosta (alumno)
 * @date    18/02/2026
 * @desc    Tests for User class to show BDD testing with Jest
 */

import { LoginUser, FakeUserRepository, User } from './user';

/**
 * @desc BDD tests for LoginUser class using Jest
 */
describe('LoginUser - BDD', () => {
  let repository: FakeUserRepository;
  let loginUser: LoginUser;

  beforeEach(() => {
    repository = new FakeUserRepository();
    loginUser = new LoginUser(repository);
  });

  test('Given valid credentials When login Then returns token', async () => {
    // Given
    repository.addUser(new User('test@mail.com', '123456'));
    // When
    const token = await loginUser.execute('test@mail.com', '123456');
    // Then
    expect(token).toBe('token-test@mail.com');
  });

  test('When email format is invalid Then throws error', async () => {
    // When & Then
    await expect(
      loginUser.execute('invalid-email', '123456')
    ).rejects.toThrow('Invalid email format');
  });

  test('Given existing user When password is wrong Then throws error', async () => {
    // Given
    repository.addUser(new User('test@mail.com', '123456'));
    // When & Then
    await expect(
      loginUser.execute('test@mail.com', 'wrongpass')
    ).rejects.toThrow('Invalid credentials');
  });

  test('When password is too short Then throws error', async () => {
    await expect(
      loginUser.execute('test@mail.com', '123')
    ).rejects.toThrow('Password must be at least 6 characters');
  });
});
