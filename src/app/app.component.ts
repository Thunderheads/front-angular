import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTestMAtBOOT';
  constructor(private router: Router) {

  }

  /**
   * fonction en charge d'appliquer la classe à la partie du menu selectionner
   */
  selectedMenu(id: string) {

    // @ts-ignore
    for(let element of document.getElementsByClassName('active')){
      element.classList.remove('active')
    }
    document.getElementById(id)!.classList.add('active')
    this.router.navigateByUrl('/'+ id);
  }
}
