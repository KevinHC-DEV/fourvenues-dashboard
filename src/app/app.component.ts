import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { TopbarComponent } from "./layout/topbar/topbar.component";
import { DashboardMenuComponent } from "./layout/dashboard-menu/dashboard-menu.component";
import { ContactSidebarComponent } from "./layout/contact-sidebar/contact-sidebar.component";
import { DashboardContentComponent } from "./pages/dashboard-content/dashboard-content.component";
import { DashboardMetricsComponent } from "./pages/dashboard-metrics/dashboard-metrics.component";
import { DashboardGraphComponent } from './pages/dashboard-graph/dashboard-graph.component';
import { DashboardTablesComponent } from "./pages/dashboard-tables/dashboard-tables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, DashboardMenuComponent, ContactSidebarComponent, DashboardContentComponent, DashboardMetricsComponent, DashboardGraphComponent, DashboardTablesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'fourvenues-dashboard';

  metrics = [
    { label: 'Visitas hoy', value: '1.230' },
    { label: 'Usuarios activos', value: '854' },
    { label: 'Conversión', value: '5,8%' },
    { label: 'Nuevos registros', value: '132' },
    { label: 'Ingresos', value: '4.820 €' },
  ];

  user: any = null;
  private timerSub: Subscription | null = null;

  constructor(private http: HttpClient) {
    this.fetchUser();
    this.startTimer();
  }

  fetchUser(): void {
    this.http.get('https://randomuser.me/api/').subscribe(
      (res: any) => {
        this.user = res.results[0];
      }
    );
  }

  startTimer(): void {
    this.stopTimer();
    this.timerSub = interval(10000).subscribe(() => {
      this.fetchUser();
    });
  }

  stopTimer(): void {
    this.timerSub?.unsubscribe();
  }

  onPhotoClick(): void {
    this.fetchUser();
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
