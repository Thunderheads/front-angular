import {Component, OnInit} from '@angular/core';
import {TableData} from "../../service/api/table.data";
import {IApplication} from "../../modeleInterface/IApplication";
import {Router} from "@angular/router";
import {DatasData} from "../../service/api/datas.data";
import {ApplicationDatas} from "../../service/api/application.datas";
import {environment} from "../../environments/environment.dev";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public datas: IApplication[] = [];
  public id_app : number | undefined;
  public ordre : string | undefined;



  constructor(private appData: ApplicationDatas) {

  }


  ngOnInit(): void {

    this.appData.get(environment.apiGetAppName).subscribe(
      data => {
        for (let element of data) {
          this.datas.push(element);
        }
      })


  }


  /**
   * Fonction en charge de renvoyer l'id de l'application
   * @param value
   */
  selectedApp(value: any) {
    this.id_app = value
  }

  /**
   * Fonction en charge de renvoyer l'ordre de tri
   * @param value
   */
  selectedNote(value: any) {
    this.ordre = value
  }
}


export interface IFilter{
 id_app : number | undefined;
 ordre : string | undefined;

}
