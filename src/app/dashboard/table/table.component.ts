import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {IApplication} from "../../../modeleInterface/IApplication";
import {TableData} from "../../../service/api/table.data";
import {IHomePage} from "../../../modeleInterface/IHomePage";
import {Router} from "@angular/router";

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements  OnInit {

  displayedColumns: string[] = ['Nom', 'Note', 'Avis', 'OS', 'Detail'];
  datas : IHomePage[] = [];
  dataSource : any;
  maxRating : number = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private appData : TableData, private router: Router) {

    this.appData.get('http://localhost/test/public/api/application').
    subscribe(
      data => {
        for (let element of data){
          this.datas.push(element);
        }
        this.dataSource = new MatTableDataSource<IHomePage>(this.datas);
        this.dataSource.paginator = this.paginator;
      }
    )
  }
  ngOnInit(): void {


  }


  redirection(id : number) {
    this.router.navigateByUrl('/afficher/'+ id);
  }
}


