import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClientService } from '../client.service';
import { ProfessionalService } from '../../professional/professional.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'service', 'professional', 'date', 'slot', 'status', 'actions'];
  appointments: { id: number; service: string; professional: string; date: string; slot: string; status: string }[] = [];

  constructor(
    private clientService: ClientService,
    private professionalService: ProfessionalService
  ) {}

  ngOnInit(): void {
    this.clientService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
    });
  }

  cancelAppointment(id: number): void {
    this.professionalService.updateAppointmentStatus(id, 'Cancelado').subscribe(() => {
      this.appointments = this.appointments.map(appt =>
        appt.id === id ? { ...appt, status: 'Cancelado' } : appt
      );
    });
  }
}
