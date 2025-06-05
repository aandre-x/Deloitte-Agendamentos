import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema-agendamento';
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router) {}

  navigateAndClose(path: string): void {
    console.log(`Navigating to: ${path}`);
    this.router.navigate([path]).then(success => {
      console.log(`Navigation to ${path} ${success ? 'succeeded' : 'failed'}`);
      if (success) {
        this.sidenav.close();
      }
    }).catch(err => {
      console.error(`Navigation error: ${err}`);
    });
  }
}
