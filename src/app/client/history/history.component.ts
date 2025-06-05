import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  appointments: { id: number; service: string; professional: string; date: string; slot: string; status: string }[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
    });
  }
}
