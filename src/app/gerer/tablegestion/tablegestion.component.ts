import {AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {IApplication} from "../../../modeleInterface/IApplication";
import {TableData} from "../../../service/api/table.data";
import {IHomePage} from "../../../modeleInterface/IHomePage";
import {Router} from "@angular/router";
import {IData} from "../../../modeleInterface/IData";
import {isEmpty} from "rxjs";
import {environment} from "../../../environments/environment.dev";

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-tablegestion',
  templateUrl: './tablegestion.component.html',
  styleUrls: ['./tablegestion.component.css']
})
export class TablegestionComponent implements  OnInit {

  @Input() donnes: number | undefined;
  @Input() donnes2: string | undefined;
  displayedColumns: string[] = ['Nom', 'OS', 'Action'];
  datas : IHomePage[] = [];
  dataSource : any;
  maxRating : number = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private appData : TableData, private router: Router) {

  }
  ngOnInit(): void {
    this.appData.get(environment.apiAppGet).
    subscribe(
      data => {
        this.datas = [];
        for (let element of data){
          this.datas.push(element);
        }
        this.dataSource = new MatTableDataSource<IHomePage>(this.datas);
        this.dataSource.paginator = this.paginator;
      }
    )

  }


  redirection(id : number) {
    this.router.navigateByUrl('/afficher/'+ id);
  }


  ngOnChanges(changes: SimpleChanges): void {

    let url = environment.apiAppGet + '/param';
    if(this.donnes !== undefined && this.donnes2 !== undefined){
      url = url  +'?id='+ this.donnes + '&ordre=' +this.donnes2;
    } else {
      if(this.donnes !== undefined){
        url = url  +'?id='+ this.donnes;
      }

      if(this.donnes2 !== undefined){
        url = url +'?ordre=' +this.donnes2;
      }
    }


      this.appData.get(url).
      subscribe(
        data => {
          this.datas = [];
          for (let element of data){
            this.datas.push(element);
          }
          this.dataSource = new MatTableDataSource<IHomePage>(this.datas);
          this.dataSource.paginator = this.paginator;
        }
      )


  }

  redirectionModif(app_id: any) {
    this.router.navigateByUrl('/gerer/'+ app_id);
  }
}


