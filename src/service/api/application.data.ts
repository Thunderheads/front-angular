import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IApplication} from "../../modeleInterface/IApplication";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

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
export class ApplicationData{

  constructor(private http: HttpClient) { }

  /**
   * Fonction permettent de récuperer les applications
   * @param url
   */
  public get(url: string): Observable<IApplication> {

    return this.http.get<IApplication>(url, httpOptions)
  }

}
