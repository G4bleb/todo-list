import { app } from ".";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthProvider, User } from "../authProvider";

export class FirebaseAuth implements AuthProvider {
  private readonly auth = getAuth(app);

  public async login(username: string, password: string): Promise<User | null> {
    try {
      const res = await signInWithEmailAndPassword(this.auth, username, password);
      return res.user as User;
    } catch (error) {
      return null;
    }
  }

  public setOnAuthChange(callback: (user: User) => void): void {
    onAuthStateChanged(this.auth, (user) => {
      callback(user as User);
    });
  }
}
