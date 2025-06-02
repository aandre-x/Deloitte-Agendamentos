import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule, MatDividerModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ClientDashboardComponent {
  appointments = [
    { date: '2025-06-10', time: '10:00', service: 'Consulta Médica', professional: 'Dr. Silva' },
    { date: '2025-06-15', time: '14:30', service: 'Fisioterapia', professional: 'Ana Costa' },
  ];
}