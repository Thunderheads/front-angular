import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AjouterComponent} from "./ajouter/ajouter.component";
import {AfficherComponent} from "./afficher/afficher.component";


const routes: Routes = [
  { path: 'home', component:  DashboardComponent},
  { path: 'ajouter', component : AjouterComponent},
  { path: 'afficher' , component : AfficherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
