import { AuthProvider } from "./providers/authProvider";
import { StorageProvider } from "./providers/storageProvider";

import { FirebaseAuth } from "./providers/firebase/firebaseAuth";
import { FirebaseStorage } from "./providers/firebase/firebaseStorage";

export const authProvider: AuthProvider = new FirebaseAuth();
export const storageProvider: StorageProvider = new FirebaseStorage();
