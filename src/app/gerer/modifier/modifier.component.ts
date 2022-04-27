import { Component, OnInit } from '@angular/core';
import {IApplication} from "../../../modeleInterface/IApplication";
import {ApplicationDatas} from "../../../service/api/application.datas";
import {ActivatedRoute} from "@angular/router";
import {MatStepper} from "@angular/material/stepper";
import {IAjouter} from "../../ajouter/ajouter.component";

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  public application! : IApplication ;
  private currentIDApp: any;

  constructor(private appData : ApplicationDatas, private route: ActivatedRoute) {

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
  checkData($event: string) {
    console.log($event)
  }

}
