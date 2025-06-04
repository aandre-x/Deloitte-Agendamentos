import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

interface Availability {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-availability',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent {
  availabilityForm: FormGroup;
  availabilities: Availability[] = [
    { id: '1', day: '2025-06-11', startTime: '09:00', endTime: '17:00' }
  ];
  displayedColumns = ['day', 'startTime', 'endTime', 'actions'];

  constructor(private fb: FormBuilder) {
    this.availabilityForm = this.fb.group({
      day: ['', Validators.required],
      startTime: ['', [Validators.required, Validators.pattern('^([0-1][0-9]|2[0-3]):[0-5][0-9]$')]],
      endTime: ['', [Validators.required, Validators.pattern('^([0-1][0-9]|2[0-3]):[0-5][0-9]$')]]
    });
  }

  addAvailability(): void {
    if (this.availabilityForm.valid) {
      const availability: Availability = {
        id: Date.now().toString(),
        ...this.availabilityForm.value
      };
      this.availabilities.push(availability);
      this.availabilityForm.reset();
    }
  }

  deleteAvailability(id: string): void {
    this.availabilities = this.availabilities.filter(a => a.id !== id);
  }
}