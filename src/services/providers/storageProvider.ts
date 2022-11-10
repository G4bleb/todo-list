import { Item } from "interfaces/Item";

export abstract class StorageProvider {
  public abstract getUserItems(): Promise<Item[]>;
  public abstract setUserItems(items: Item[]): Promise<void>;
  //set item
}
