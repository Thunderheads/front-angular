import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import {ApplicationData} from "../../../service/api/application.data";
import {MatTableDataSource} from "@angular/material/table";
import {IApplication} from "../../../modeleInterface/IApplication";

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {

  chartRating: any;
  chartVote: any;
  data ?: IApplication;

  constructor(private appData: ApplicationData) {
  }

  ngOnInit(): void {
    this.chartRating = document.getElementById('my_first_chart');
    this.chartVote = document.getElementById('my_second_chart');
    const url = 'http://localhost/test/public/api/application/' + '25';
    this.appData.get(url).subscribe(
      data => {
        this.data = data;

        let i=0;
        for(let myData of data.datas){
          if(Math.floor((new Date(Date.now()).getDate() - new Date(myData.dateCollect).getTime()) / 1000 / 60 / 60 / 24)>7){
            i++;
          }
          //console.log(data.dataCollect.getDate())
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
          data: [4.6, 4.2, 4.7, 5, 4.1, 4.45, 3, 2, 4.5, 1, 0, 5],
          label: "Notes",
          backgroundColor: "blue",
          tension: 0.2,
          borderColor: "blue"

        }],
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
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
      type: 'line',
      data: {
        datasets: [{
          data: [25565, 54554, 54545, 69888, 69888, 69999, 78000, 79000, 80000, 90000, 91000, 92000],
          label: "Avis",
          backgroundColor: "red",
          tension: 0.2,
          borderColor: "red"

        }],
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
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

}
