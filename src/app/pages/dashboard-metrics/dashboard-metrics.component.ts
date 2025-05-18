import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-metrics.component.html',
  styleUrls: ['./dashboard-metrics.component.css']
})
export class DashboardMetricsComponent {
  metrics = [
    { label: 'Clicks', value: 670, trend: 169.1 },
    { label: 'Impressions', value: 1245, trend: 285.8 },
    { label: 'CTR', value: '21.0%', trend: 89.1 },
    { label: 'Click Conversions', value: 32, trend: -81.2 },
    { label: 'View Conversions', value: 22, trend: -75.0 },
    { label: 'Total Conversions', value: 250, trend: 90.1 },
  ];
}
