
import {Component, OnInit} from '@angular/core';
import {TableData} from "../../service/api/table.data";
import {IApplication} from "../../modeleInterface/IApplication";
import {Router} from "@angular/router";
import {DatasData} from "../../service/api/datas.data";
import {ApplicationDatas} from "../../service/api/application.datas";

@Component({
  selector: 'app-gerer',
  templateUrl: './gerer.component.html',
  styleUrls: ['./gerer.component.css']
})
export class GererComponent implements OnInit {

  public datas: IApplication[] = [];
  public id_app : number | undefined;
  public ordre : string | undefined;



  constructor(private appData: ApplicationDatas) {

  }


  ngOnInit(): void {

    this.appData.get('http://localhost/test/public/api/application/name').subscribe(
      data => {
        for (let element of data) {
          this.datas.push(element);
        }
      }
    )


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
