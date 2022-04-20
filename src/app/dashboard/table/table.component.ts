import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {IApplication} from "../../../modeleInterface/IApplication";
import {ApplicationData} from "../../../service/api/application.data";

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['Nom', 'Note', 'Avis', 'OS'];
  datas : IApplication[] = [];
  dataSource = new MatTableDataSource<IApplication>(this.datas);
  maxRating : number = 5;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private appData : ApplicationData) { }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    //A REACTIVER QUAND LE ROUTING SERA EN PLACE
    //this.appData.get('http://localhost/test/public/api/application').
    //subscribe(
      //data => {
        //for (let element of data){
          //this.datas.push(element);
        //}
        //this.dataSource = new MatTableDataSource<IApplication>(this.datas);
        //console.log(this.datas
        //)
      //}
    //)
  }

}


