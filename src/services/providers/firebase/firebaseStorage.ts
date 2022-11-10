import { app } from ".";
import { StorageProvider } from "../storageProvider";
import { Item } from "interfaces/Item";
import { authProvider } from "services";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";

export class FirebaseStorage implements StorageProvider {
  private readonly db = getFirestore(app);
  private readonly users = collection(this.db, "users");

  // public async createItem(uid: string, item: Item) {
  //   // WIP
  //   try {
  //     const docRef = await addDoc(, {
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  public async getUserItems(): Promise<Item[]> {
    // get only current user items ?
    try {
      const document = doc(this.users, authProvider.user?.uid);
      const res = await getDoc(document);
      return res.get("items") as Item[];
    } catch (e) {
      console.error("Error getting user items: ", e);
      return [];
    }
  }

  public async setUserItems(items: Item[]): Promise<void> {
    try {
      const document = doc(this.users, authProvider.user?.uid);
      console.log("setUserItems", items);

      await setDoc(document, { items });
    } catch (e) {
      console.error("Error setting user items: ", e);
    }
  }
}
