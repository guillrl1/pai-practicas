/**
 * Universidad de La Laguna (ULL)
 * Escuela Superior de Ingeniería y Tecnología (ESIT)
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas (PAI)
 *
 * @file    09-user.ts
 * @author  Raúl González Acosta (alumno)
 * @date    18/02/2026
 * @desc    Class User to show BDD testing with Jest
 */

/**
 * @desc User class representing a user in the system
 */
export class User {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) { }
}

/**
 * @desc UserRepository interface defining methods to access user data
 */
export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
}

/**
 * @desc LoginUser class responsible for handling user login logic
 */
export class LoginUser {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(email: string, password: string): Promise<string> {
    this.validateEmail(email);
    this.validatePassword(password);

    const user = await this.userRepository.findByEmail(email);

    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }

    return this.generateToken(user);
  }

  private validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
  }

  private validatePassword(password: string) {
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
  }

  private generateToken(user: any): string {
    return `token-${user.email}`;
  }
}

/**
 * @desc FakeUserRepository class implementing UserRepository for testing purposes
 */
export class FakeUserRepository implements UserRepository {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null;
  }
}
