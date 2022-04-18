import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTestMAtBOOT';

  /**
   * fonction en charge d'appliquer la classe à la partie du menu selectionner
   */
  selectedMenu(id: string) {

    // @ts-ignore
    for(let element of document.getElementsByClassName('active')){
      console.log(element.classList.remove('active'))
    }

    document.getElementById(id)!.classList.add('active')
  }
}
