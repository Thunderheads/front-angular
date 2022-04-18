import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Nom', 'Note', 'Avis', 'OS'];
  dataSource = new MatTableDataSource<AppData>(APPLICATION_DATA);
  maxRating : number = 5;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }
}

export interface AppData {
  nom: string;
  note: number;
  avis: number;
  avisAugmentation : number;
  os: string;
}

const APPLICATION_DATA: AppData[] = [
  {nom: "Facebook", note: 4.9, avis: 20000, avisAugmentation : 500, os: 'android'},
  {nom: "Facebook", note: 4.1, avis: 20000, avisAugmentation : 250,  os: 'iOS'},
  {nom: "Google", note: 4.2, avis: 20000,  avisAugmentation : 24, os: 'android'},
  {nom: "Google", note: 3.2, avis: 20000, avisAugmentation : 35,  os: 'iOS'},
  {nom: "Shazam", note: 4.2, avis: 20000, avisAugmentation : 55,  os: 'android'},
  {nom: "Shazam", note: 4.1, avis: 20000, avisAugmentation : 442,  os: 'iOS'},

];
