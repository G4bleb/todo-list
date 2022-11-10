import { app } from ".";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthProvider, User } from "../authProvider";

export class FirebaseAuth implements AuthProvider {
  private readonly auth = getAuth(app);
  private _user: User | null = null;

  public get user(): User | null {
    return this._user;
  }
  private set user(user: User | null) {
    this._user = user;
  }

  public constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  public async login(username: string, password: string): Promise<User | null> {
    try {
      const res = await signInWithEmailAndPassword(this.auth, username, password);
      return res.user as User;
    } catch (error) {
      return null;
    }
  }

  public addOnAuthChange(callback: (user: User | null) => void): void {
    onAuthStateChanged(this.auth, (user) => {
      callback(user);
    });
  }
}
