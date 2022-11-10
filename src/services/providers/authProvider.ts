export interface User {
  uid: string;
}

export abstract class AuthProvider {
  public abstract get user(): User | null;
  public abstract login(username: string, password: string): Promise<User | null>;
  public abstract addOnAuthChange(callback: (user: User | null) => void): void;
}
