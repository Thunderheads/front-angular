import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import {ActivatedRoute} from "@angular/router";
import {AfficherData} from "../../service/api/afficher.data";
import {ISource} from "../../modeleInterface/ISource";
import {IOS} from "../../modeleInterface/IOS";


@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  currentIDApp!: string;

  public appAndroid : IOS | undefined;
  public appIos : IOS | undefined;
  public app! : IOS;

  constructor(private route: ActivatedRoute, private afficherData: AfficherData) {}

  ngOnInit(): void {
    //TODO : passer la liste au composant fils
    this.currentIDApp = this.route.snapshot.paramMap.get('id')!;
    //http://localhost/test/public/api/os/
    const url = 'http://localhost/test/public/api/os/' + this.currentIDApp;
    this.afficherData.get(url).subscribe(
      data => {

        for (let myData of data) {

          if(myData.nom == 'android'){
            this.appAndroid = myData
            this.app = myData
          }
          if(myData.nom == 'iOS'){
            this.appIos = myData
          }
        }
      });
  }


  change(app: string) {

    if(app == 'android'){
      this.app =this.appAndroid!;
    } else {
      this.app = this.appIos!
    }


  }
}


