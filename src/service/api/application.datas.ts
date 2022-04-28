import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {IHomePage} from "../../modeleInterface/IHomePage";
import {IApplication} from "../../modeleInterface/IApplication";

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
export class ApplicationDatas {

  constructor(private http: HttpClient) { }

  /**
   * Fonction permettent de récuperer les applications
   * @param url
   */
  public get(url: string): Observable<IApplication> {

    return this.http.get<IApplication>(url, httpOptions)
  }

  public put(url : string, param : IApplication){
    return this.http.put<IApplication>(url, param, httpOptions)
  }

}
