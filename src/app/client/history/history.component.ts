import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  appointments = [
    {
      id: 1,
      service: 'Consulta Médica',
      professional: 'Dr. João Silva',
      date: '2025-06-03',
      slot: '09:00',
      status: 'Agendado'
    },
    {
      id: 2,
      service: 'Fisioterapia',
      professional: 'Dra. Maria Santos',
      date: '2025-05-30',
      slot: '14:00',
      status: 'Concluído'
    }
  ];

  cancelAppointment(id: number): void {
    console.log(`Cancelando agendamento ID: ${id}`);
  }
}