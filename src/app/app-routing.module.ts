import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AjouterComponent} from "./ajouter/ajouter.component";
import {AfficherComponent} from "./afficher/afficher.component";
import {GererComponent} from "./gerer/gerer.component";
import {ModifierComponent} from "./gerer/modifier/modifier.component";


const routes: Routes = [
  { path: 'home', component:  DashboardComponent},
  { path: 'ajouter', component : AjouterComponent},
  { path: 'gerer' , component : GererComponent},
  { path : 'gerer/:id', component : ModifierComponent},


  { path: 'afficher/:id' , component : AfficherComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
