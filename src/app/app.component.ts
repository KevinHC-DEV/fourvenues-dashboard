import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { TopbarComponent } from "./layout/topbar/topbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, SidebarComponent, TopbarComponent],
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
