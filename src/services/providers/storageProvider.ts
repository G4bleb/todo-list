import { Item } from "interfaces/Item";

export abstract class StorageProvider {
  public abstract getUserItems(userId: string): Promise<Item[]>;
  //read items (matching logged-in uid)
  //set item
  //set items ?
}
