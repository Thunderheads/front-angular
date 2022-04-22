import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {IHomePage} from "../../modeleInterface/IHomePage";

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
export class TableData {

  constructor(private http: HttpClient) { }

  /**
   * Fonction permettent de récuperer les applications
   * @param url
   */
  public get(url: string): Observable<IHomePage> {

    return this.http.get<IHomePage>(url, httpOptions)
  }

}
