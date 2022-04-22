import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import {TableData} from "../../../service/api/table.data";
import {MatTableDataSource} from "@angular/material/table";
import {IApplication} from "../../../modeleInterface/IApplication";
import {IData} from "../../../modeleInterface/IData";
import {formatDate} from "@angular/common";
import {ApplicationDatas} from "../../../service/api/application.datas";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {

  chartRating: any;
  chartVote: any;
  data !: IApplication;
  dataStorage : IData[] = [];
  currentIDApp!: string;

  constructor(private appData: ApplicationDatas, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentIDApp = this.route.snapshot.paramMap.get('id')!;
    this.chartRating = document.getElementById('my_first_chart');
    this.chartVote = document.getElementById('my_second_chart');
    const url = 'http://localhost/test/public/api/application/' + this.currentIDApp;
    this.appData.get(url).subscribe(
      data => {
        this.data = data;
        for(let myData of data.datas!){
          //si la date du jour - date collect est en dessous de 7 jours on stocke les données qu'on affichera plus tard
          if(Math.floor((new Date(Date.now()).getTime() - new Date(myData.dateCollect).getTime()) / 1000 / 60 / 60 / 24)<=7){
            // on ajoute dans une liste les données concernant ces jours au format IData
            this.dataStorage?.push(myData);
          }
        }

        //pour récuperer la date du jour new Date(Date.now()).getDate()
        Chart.register(...registerables);
        this.loadChartRating();


        Chart.register(...registerables);
        this.loadChartVote();

      }
    )

  }

  private loadChartRating() {
    new Chart(this.chartRating, {
      type: 'line',
      data: {
        datasets: [{
          data: this.listeRating(this.dataStorage),
          label: "Notes",
          backgroundColor: "blue",
          tension: 0.2,
          borderColor: "blue"

        }],
        labels: this.listeDate(this.dataStorage)
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }

    })

  }

  private loadChartVote() {
    new Chart(this.chartVote, {
      type: 'bar',
      data: {
        datasets: [{
          data: this.listeVote(this.dataStorage),
          label: "Avis",
          backgroundColor: "blue",




        }],
        labels: this.listeDate(this.dataStorage),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }

    })
  }

  /**
   * Fonction en charge d'extraire la liste des dates associées aux données
   * @param lstDatas
   * @return string[]
   */
  public listeDate(lstDatas : IData[]) : string[]{
    let lstDate : string[]=[];

    for (let data of lstDatas){
      lstDate.push(formatDate(data.dateCollect,'dd/MM/yyyy', 'fr-FR'));

    }
    return lstDate

  }

  /**
   * Fonction en charge d'extraire la liste des notes associées aux données
   * @param lstRating
   * @return number[]
   */
  public listeRating(lstDatas : IData[]) : number[]{
    let lstRating : number[]=[];

    for (let data of lstDatas){
      lstRating.push(data.rating);
    }
    return lstRating;
  }

  /**
   * Fonction en charge d'extraire la liste des avis associées aux données
   * @param lstVote
   * @return number[]
   */
  public listeVote(lstDatas : IData[]) : number[]{
    let lstVote : number[]=[];

    for (let data of lstDatas){
      lstVote.push(data.vote);
    }
    return lstVote;
  }




















  /// A FACTORISER !!!!!!
  changeToWeek() {
    let chartStatus = Chart.getChart("my_first_chart");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    let chartStatus2 = Chart.getChart("my_second_chart");
    if (chartStatus2 != undefined) {
      chartStatus2.destroy();
    }

    this.chartRating = document.getElementById('my_first_chart');
    this.chartVote = document.getElementById('my_second_chart');

    this.dataStorage = [];
    for(let myData of this.data.datas!){
      //si la date du jour - date collect est en dessous de 7 jours on stocke les données qu'on affichera plus tard
      if(Math.floor((new Date(Date.now()).getTime() - new Date(myData.dateCollect).getTime()) / 1000 / 60 / 60 / 24)<=7){
        // on ajoute dans une liste les données concernant ces jours au format IData
        this.dataStorage?.push(myData);
      }
    }
    this.loadChartVote();
    this.loadChartRating();
  }

  changeToMonth() {
    let chartStatus = Chart.getChart("my_first_chart");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    let chartStatus2 = Chart.getChart("my_second_chart");
    if (chartStatus2 != undefined) {
      chartStatus2.destroy();
    }

    this.chartRating = document.getElementById('my_first_chart');
    this.chartVote = document.getElementById('my_second_chart');
    this.dataStorage = [];
    for(let myData of this.data.datas!){
      //si la date du jour - date collect est en dessous de 7 jours on stocke les données qu'on affichera plus tard
      if(Math.floor((new Date(Date.now()).getTime() - new Date(myData.dateCollect).getTime()) / 1000 / 60 / 60 / 24)<=31){
        // on ajoute dans une liste les données concernant ces jours au format IData
        this.dataStorage?.push(myData);
      }
    }
    this.loadChartVote();
    this.loadChartRating();
  }

  changeToThreeMonth() {

    let chartStatus = Chart.getChart("my_first_chart");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    let chartStatus2 = Chart.getChart("my_second_chart");
    if (chartStatus2 != undefined) {
      chartStatus2.destroy();
    }

    this.chartRating = document.getElementById('my_first_chart');
    this.chartVote = document.getElementById('my_second_chart');


    this.dataStorage = [];
    for(let myData of this.data.datas!){
      //si la date du jour - date collect est en dessous de 7 jours on stocke les données qu'on affichera plus tard
      if(Math.floor((new Date(Date.now()).getTime() - new Date(myData.dateCollect).getTime()) / 1000 / 60 / 60 / 24)<=90){
        // on ajoute dans une liste les données concernant ces jours au format IData
        this.dataStorage?.push(myData);
      }
    }
    this.loadChartVote();
    this.loadChartRating();
  }
}
