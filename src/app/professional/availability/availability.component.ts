import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ProfessionalService } from '../professional.service';

@Component({
  selector: 'app-availability',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatListModule],
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  availabilityForm: FormGroup;
  availabilities: { date: string; time: string }[] = [];

  constructor(private fb: FormBuilder, private professionalService: ProfessionalService) {
    this.availabilityForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAvailabilities();
  }

  loadAvailabilities(): void {
    this.professionalService.getAgenda({ startDate: '2025-06-01', endDate: '2025-06-30' }).subscribe(appointments => {
      this.availabilities = appointments.map(a => ({ date: a.date, time: a.time }));
    });
  }

  addAvailability(): void {
    if (this.availabilityForm.valid) {
      const availability = this.availabilityForm.value;
      console.log('Disponibilidade adicionada:', availability);
      this.availabilityForm.reset();
    }
  }
}
