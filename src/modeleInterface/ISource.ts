import {IOS} from "./IOS";
import {IApplication} from "./IApplication";

export interface ISource {


  [Symbol.iterator](): IterableIterator<ISource>;
  os : IOS;
  application : IApplication
}
