import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

interface Appointment {
  id: string;
  date: string;
  time: string;
  service: string;
  client: string;
  status: string;
}

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  filterForm: FormGroup;
  appointments: Appointment[] = [
    { id: '1', date: '2025-06-10', time: '10:00', service: 'Consulta Médica', client: 'João Silva', status: 'Pendente' },
    { id: '2', date: '2025-06-15', time: '14:30', service: 'Fisioterapia', client: 'Maria Costa', status: 'Pendente' }
  ];
  displayedColumns = ['date', 'time', 'service', 'client', 'status', 'actions'];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      status: ['']
    });
  }

  ngOnInit(): void {
    this.filterForm.get('status')?.valueChanges.subscribe(value => {
      this.appointments = value
        ? this.appointments.filter(a => a.status === value)
        : this.appointments;
    });
  }

  updateStatus(id: string, status: string): void {
    this.appointments = this.appointments.map(a => a.id === id ? { ...a, status } : a);
  }
}