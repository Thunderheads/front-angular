import {IData} from "./IData";

export interface IOS{
  [Symbol.iterator](): IterableIterator<IOS>;
  nom : string;
  donnes : IData[]
}
