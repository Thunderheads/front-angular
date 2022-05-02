import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import {ActivatedRoute} from "@angular/router";
import {AfficherData} from "../../service/api/afficher.data";
import {ISource} from "../../modeleInterface/ISource";
import {IOS} from "../../modeleInterface/IOS";
import {environment} from "../../environments/environment.dev";


@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  currentIDApp!: string;

  public appAndroid : IOS | undefined ;
  public appIos : IOS | undefined ;
  public app! : IOS;

  constructor(private route: ActivatedRoute, private afficherData: AfficherData) {}

  ngOnInit(): void {

    this.currentIDApp = this.route.snapshot.paramMap.get('id')!;

    const url = environment.apiGetOS + this.currentIDApp;
    this.afficherData.get(url).subscribe(
      data => {
        for (let myData of data) {

          if(myData.nom == 'android'){
            this.appAndroid = myData
          }
          if(myData.nom == 'iOS'){
            this.appIos = myData
          }

          if(this.appIos == undefined ){
            this.app = this.appAndroid!;
          } else {
            if(this.appIos.donnes.length > 0){
              this.app = this.appIos;
            } else {
              this.app = this.appAndroid!;
            }
          }
        }
      });
  }

  /**
   * Fonction en charge de modifier la source des données en fonction du store passé en paramètre.
   * @param app
   */
  change(app: string) {

    if(app == 'android'){
      this.app =this.appAndroid!;
    } else {
      this.app = this.appIos!
    }


  }
}


