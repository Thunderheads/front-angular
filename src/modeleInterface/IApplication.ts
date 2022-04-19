import {IResponsable} from "./IResponsable";
import {IData} from "./IData";
import {ISource} from "./ISource";

export interface IApplication{

  id : number;
  nom : string;
  administrateur : IResponsable;
  datas : IData[];
  /**
   * IOS / Android
   */
  source : ISource[];
}
