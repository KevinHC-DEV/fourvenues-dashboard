import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-graph.component.html',
})
export class DashboardGraphComponent {
  public data = [
    { date: '23.04', clickRate: 60, impressions: 75 },
    { date: '25.04', clickRate: 45, impressions: 70 },
    { date: '27.04', clickRate: 15, impressions: 30 },
    { date: '29.04', clickRate: 50, impressions: 60 },
    { date: '31.04', clickRate: 55, impressions: 50 },
    { date: '02.05', clickRate: 65, impressions: 70 },
    { date: '04.05', clickRate: 40, impressions: 45 },
    { date: '06.05', clickRate: 25, impressions: 60 },
    { date: '08.05', clickRate: 30, impressions: 65 },
    { date: '10.05', clickRate: 28, impressions: 72 },
    { date: '12.05', clickRate: 22, impressions: 68 },
    { date: '14.05', clickRate: 18, impressions: 60 },
    { date: '16.05', clickRate: 24, impressions: 55 },
    { date: '18.05', clickRate: 20, impressions: 63 },
    { date: '20.05', clickRate: 27, impressions: 50 },
    { date: '22.05', clickRate: 25, impressions: 52 },
    { date: '24.05', clickRate: 33, impressions: 66 },
    { date: '26.05', clickRate: 35, impressions: 71 },
    { date: '28.05', clickRate: 30, impressions: 60 },
  ];
}
