import { app } from ".";
import { StorageProvider } from "../storageProvider";
import { getFirestore } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";
import { Item } from "interfaces/Item";

export class FirebaseStorage implements StorageProvider {
  private db = getFirestore(app);
  private users = collection(this.db, "users");

  public async createItem(uid: string, item: Item) {
    // WIP
    // try {
    //   const docRef = await addDoc(, {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  }
}
