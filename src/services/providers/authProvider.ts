export interface User {
  uid: string;
}

export abstract class AuthProvider {
  public abstract login(username: string, password: string): Promise<User | null>;
  public abstract setOnAuthChange(callback: (user: User) => void): void;
}
