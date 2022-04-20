import {IApplication} from "./IApplication";

export interface IData{

    dateCollect : Date;
    rating : number;
    vote : number;
    application ? : IApplication;
}
