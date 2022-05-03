import {Component, OnInit} from '@angular/core';
import {AjouterData} from "../../service/api/ajouter.data";
import {MatStepper} from "@angular/material/stepper";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment.dev";



@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})


export class AjouterComponent implements OnInit {

  isLinear = false;


  public url: string;
  public isInsert: boolean;
  public isError: boolean = false;
  public data: any;
  public isNameChange: boolean = false;
  public nomApplication: string = 'undefined';
  public isConfirmed: boolean = false;
  public isTesturlShow: boolean = true;
  public isInformationApp: boolean = false;
  public isValidate: boolean = false;


  constructor(private ajouterApp: AjouterData, private router: Router) {
    this.isInsert = false;
    this.url = '';
  }

  ngOnInit(): void {


  }

  /**
   * Fonction en charge de lancer l'appel a l'api pour tester l'url
   *
   */
  checkData(stepper: MatStepper, isInsert?: boolean) {
    let ajouter: IAjouter = {
      urlATester: this.url,
      isInsert: this.isInsert,
      nomApplication: this.nomApplication
    };
    if (isInsert) {
      ajouter.isInsert = true;
    }

    const url = environment.apiPostApplication;
    console.log(ajouter);
    this.ajouterApp.postApplication(url, ajouter).subscribe({
        next: value => {
          this.data = value

          this.isTesturlShow = false
          this.isInformationApp = true
          if (isInsert) {
            this.isInformationApp = false
            this.isConfirmed = false
            this.isValidate = true
          }
          stepper.next();
        },
        //si erreur on passe pas dans next et dans complete
        error: err => {
          this.isError = true , this.isTesturlShow = false , this.data = undefined
        },
        complete: () => console.log('Done')
      }
    )


  }


  changeName(value: boolean) {
    this.isNameChange = value;

  }

  confirmation(stepper: MatStepper) {
    this.isInformationApp = false;
    this.isConfirmed = true;
    stepper.next()
  }

  retry() {
    this.isError = false;
    this.isTesturlShow = true;

  }

  cancel(stepper: MatStepper) {

    this.isError = false;
    this.isNameChange = false;
    this.nomApplication = 'undefined';
    this.isConfirmed = false;
    this.isTesturlShow = true;
    this.isInformationApp = false;
    this.isValidate = false;
    stepper.reset();

  }

  redirection() {
    this.router.navigateByUrl('/home');
  }
}


export interface IAjouter {

  urlATester: string,
  isInsert: boolean,
  nomApplication: string,
}
