import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {IOS} from "../../modeleInterface/IOS";


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
export class AfficherData{

  constructor(private http: HttpClient) { }

  /**
   * Fonction permettent de récuperer une application
   * @param url
   */
  public get(url: string): Observable<IOS> {

    return this.http.get<IOS>(url, httpOptions)
  }

}
