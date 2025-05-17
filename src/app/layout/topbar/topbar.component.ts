import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnDestroy {
  user: any = null;
  private timerSub: Subscription | null = null;


  isSearchOpen = false;

  constructor(private http: HttpClient) {
    this.fetchUser();
    this.startTimer();
  }

  fetchUser(): void {
    this.http.get('https://randomuser.me/api/').subscribe((res: any) => {
      this.user = res.results[0];
    });
  }

  startTimer(): void {
    this.stopTimer();
    this.timerSub = interval(10000).subscribe(() => this.fetchUser());
  }

  stopTimer(): void {
    this.timerSub?.unsubscribe();
  }

  onPhotoClick(): void {
    this.fetchUser();
    this.startTimer();
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
