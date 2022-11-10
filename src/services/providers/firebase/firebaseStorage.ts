import { app } from ".";
import { StorageProvider } from "../storageProvider";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";
import { Item } from "interfaces/Item";

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

  public async getUserItems(userId: string): Promise<Item[]> {
    // get only current user items ?
    try {
      const document = doc(this.users, userId);
      const res = await getDoc(document);
      return res.get("items") as Item[];
    } catch (e) {
      console.error("Error getting user items: ", e);
      return [];
    }
  }
}
