import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-tables.component.html',
  styleUrls: ['./dashboard-tables.component.css']
})
export class DashboardTablesComponent {
  channelStats = [
    { name: 'Direct', sessions: 3397, traffic: '65.9%', goalRate: '3.5%', goals: 118, progress: 90 },
    { name: 'Email', sessions: 808, traffic: '15.7%', goalRate: '1.9%', goals: 15, progress: 40 },
    { name: 'Organic Search', sessions: 430, traffic: '8.3%', goalRate: '0.2%', goals: 1, progress: 10 },
    { name: 'Paid Search', sessions: 194, traffic: '2.1%', goalRate: '0.2%', goals: 5, progress: 20 },
    { name: 'Referral', sessions: 108, traffic: '1.0%', goalRate: '2.4%', goals: 7, progress: 25 },
  ];

  cityStats = [
    { name: 'Ottawa', customers: 106, progress: 90 },
    { name: 'Toronto', customers: 55, progress: 50 },
    { name: 'New York', customers: 54, progress: 45 },
    { name: 'Calgary', customers: 7, progress: 10 },
    { name: 'Berlin', customers: 32, progress: 28 },
  ];
}
