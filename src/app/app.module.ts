import {LOCALE_ID, NgModule} from '@angular/core';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './dashboard/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { AfficherComponent } from './afficher/afficher.component';
import {MatCardModule} from "@angular/material/card";
import { GrapheComponent } from './afficher/graphe/graphe.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import { GererComponent } from './gerer/gerer.component';
import {TablegestionComponent} from "./gerer/tablegestion/tablegestion.component";
import { ModifierComponent } from './gerer/modifier/modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TablegestionComponent,
    DashboardComponent,
    AfficherComponent,
    GrapheComponent,
    AjouterComponent,
    GererComponent,
    ModifierComponent
  ],
    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonToggleModule,
        FormsModule,
        MatStepperModule
    ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
