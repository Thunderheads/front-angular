import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {IData} from "../../modeleInterface/IData";

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
export class DatasData{

  constructor(private http: HttpClient) { }

  /**
   * Fonction permettent de récuperer les données
   * @param url
   */
  public get(url: string): Observable<IData> {

    return this.http.get<IData>(url, httpOptions)
  }

}
