import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';

interface Slot {
  id: number;
  professional: string;
  time: string;
  date: string;
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppointmentCardComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  dateForm: FormGroup;
  slots: Slot[] = [
    { id: 1, professional: 'Dr. João Silva', time: '09:00', date: '2025-06-11' },
    { id: 2, professional: 'Dr. João Silva', time: '10:00', date: '2025-06-11' },
    { id: 3, professional: 'Dra. Maria Oliveira', time: '14:00', date: '2025-06-12' },
    { id: 4, professional: 'Dra. Maria Oliveira', time: '15:00', date: '2025-06-12' }
  ];
  filteredSlots: Slot[] = [];

  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      date: [new Date(2025, 5, 11)] // 11/06/2025
    });
  }

  ngOnInit(): void {
    this.filterSlots();
    this.dateForm.get('date')?.valueChanges.subscribe(() => this.filterSlots());
  }

  private filterSlots(): void {
    const selectedDate = this.dateForm.get('date')?.value;
    if (selectedDate) {
      const formattedDate = this.formatDate(selectedDate);
      console.log('Selected Date:', formattedDate, 'Available Slots:', this.slots);
      this.filteredSlots = this.slots.filter(slot => slot.date === formattedDate);
      console.log('Filtered Slots:', this.filteredSlots);
    }
  }

  private formatDate(date: Date): string {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  }

  bookSlot(slot: Slot): void {
    console.log('Agendamento:', { client: 'Cliente Mock', ...slot });
  }
}