import { app } from ".";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthProvider, User } from "../authProvider";

export class FirebaseAuth implements AuthProvider {
  private auth = getAuth(app);

  public async login(username: string, password: string): Promise<boolean> {
    try {
      await signInWithEmailAndPassword(this.auth, username, password);
      return true;
    } catch (error) {
      return false;
    }
  }
  public setOnAuthChange(callback: (user: User) => void): void {
    onAuthStateChanged(this.auth, (user) => {
      callback(user as User);
    });
  }
}
