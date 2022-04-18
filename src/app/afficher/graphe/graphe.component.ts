import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {

  chart: any;

  constructor() {
  }

  ngOnInit(): void {
    this.chart = document.getElementById('my_first_chart')
    Chart.register(...registerables);
    this.loadChart();

    this.chart = document.getElementById('my_second_chart')
    Chart.register(...registerables);
    this.loadChart2();

  }

  private loadChart() {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [{
          data: [4.6, 4.2, 4.7, 5, 4.1, 4.45, 3, 2 , 4.5, 1, 0, 5 ],
          label : "Notes",
          backgroundColor : "blue",
          tension : 0.2,
          borderColor : "blue"

        }],
        labels:["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
      },
      options:{
        responsive: true,
        maintainAspectRatio : false,
        scales : {
          y: {
            beginAtZero :true
          }
        }
      }

    })
  }
  private loadChart2() {

    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [{
          data: [ 25565, 54554, 54545, 69888, 69888, 69999, 78000, 79000, 80000, 90000, 91000, 92000],
          label : "Avis",
          backgroundColor : "red",
          tension : 0.2,
          borderColor : "red"

        }],
        labels:["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
      },
      options:{
        responsive: true,
        maintainAspectRatio : false,
        scales : {
          y: {
            beginAtZero :false
          }
        }
      }

    })
  }

}
