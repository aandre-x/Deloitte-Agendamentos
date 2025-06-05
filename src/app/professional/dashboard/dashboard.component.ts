import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: '<mat-card><h2>Dashboard Profissional</h2><p>Bem-vindo ao seu dashboard!</p></mat-card>',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
