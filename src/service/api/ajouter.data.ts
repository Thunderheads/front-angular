import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IApplication} from "../../modeleInterface/IApplication";
import {IAjouter} from "../../app/ajouter/ajouter.component";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})

export class AjouterData{

  constructor(private http: HttpClient) { }

  /**
   * Envoie au serveur l'url d'accès a l'application
   * @param url
   * @param urlAcces
   */
  public postApplication(url: string, param : IAjouter): Observable<IApplication> {

    return this.http.post<IApplication>(url, param, httpOptions)
  }
}
