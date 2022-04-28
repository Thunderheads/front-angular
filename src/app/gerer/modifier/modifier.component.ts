import { Component, OnInit } from '@angular/core';
import {IApplication} from "../../../modeleInterface/IApplication";
import {ApplicationDatas} from "../../../service/api/application.datas";
import {ActivatedRoute, Router} from "@angular/router";
import {MatStepper} from "@angular/material/stepper";
import {IAjouter} from "../../ajouter/ajouter.component";
import {AjouterData} from "../../../service/api/ajouter.data";

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  public application! : IApplication ;
  private currentIDApp: any;

  constructor(private appData : ApplicationDatas,

              private route: ActivatedRoute,
              private ajouterApp: AjouterData,
              private router: Router) {

  }

  ngOnInit(): void {
    this.currentIDApp = this.route.snapshot.paramMap.get('id')!;
    const url = "http://localhost/test/public/api/application/" + this.currentIDApp;
    this.appData.get(url).subscribe(
      data =>{
        this.application = data;
        console.log(this.application)
      }
    )

  }

  /**
   *
   *
   */
  checkData(event: string) {
    for( let source of this.application.sources ){
      if(source.os.nom == event){

        let ajouter : IAjouter = {
          urlATester: source.url,
          isInsert: false,
          nomApplication : this.application.nom!
        };
        const url = "http://localhost/test/public/api/application/";
        console.log(ajouter);

        this.ajouterApp.postModifierApplication(url, ajouter).subscribe({
            next : value => {
              //url correspond à quelque chose et est bien pour le bon os
              if(value.app_os == event){
                console.log("correct")

                // correspondance au niveau de l'url mais pas au niveau de l'os
              } else {
                console.log('incorrect')
              }
            },
            //si erreur on passe pas dans next et dans complete
            error : err => {console.log('ca marche pas')} ,
            complete : () => console.log('Done')
          }
        )
      }
    }

  }

  redirection() {
    this.router.navigateByUrl('/home');
  }

  /**
   * Fonction en charge de faire une demande de mise à jour
   */
  update() {
    const url = "http://localhost/test/public/api/application"
    console.log( this.application)
    this.appData.put(url, this.application).subscribe( {
        next : value => { this.router.navigateByUrl('/home') },
        error : err => {console.log('ca marche pas')} ,
        complete : () => console.log('Done')
    })
  }
}

export interface IModifier{

  app_nom: string
  app_nombreAvis: number
  app_note: number
  app_os: string
}
