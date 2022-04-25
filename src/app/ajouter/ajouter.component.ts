import { Component, OnInit } from '@angular/core';
import {AjouterData} from "../../service/api/ajouter.data";
import {IApplication} from "../../modeleInterface/IApplication";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})


export class AjouterComponent implements OnInit {

  private ajout!: IAjouter;

  constructor(private ajouterApp : AjouterData) {
  }

  ngOnInit(): void {
    this.ajout.isInsert = false;
  }

  /**
   * Fonction en charge de lancer l'appel a l'api pour tester l'url
   * @constructor
   */
  public CheckData(){

    const url = "";
    this.ajouterApp.postApplication(url, this.ajout).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}


export interface IAjouter{

  urlATester : string;
  isInsert : boolean;
}
