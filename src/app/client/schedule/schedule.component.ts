import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  scheduleForm: FormGroup;
  services: { id: number; name: string }[] = [];
  professionals: { id: number; name: string }[] = [];
  slots: string[] = [];

  constructor(private fb: FormBuilder, private scheduleService: ScheduleService) {
    this.scheduleForm = this.fb.group({
      service: ['', Validators.required],
      professional: ['', Validators.required],
      date: ['', Validators.required],
      slot: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.scheduleService.getServices().subscribe(services => {
      this.services = services;
    });

    this.scheduleForm.get('service')?.valueChanges.subscribe(serviceId => {
      this.scheduleService.getProfessionals(serviceId).subscribe(professionals => {
        this.professionals = professionals;
        this.scheduleForm.get('professional')?.reset();
        this.scheduleForm.get('slot')?.reset();
        this.slots = [];
      });
    });

    this.scheduleForm.get('professional')?.valueChanges.subscribe(professionalId => {
      const date = this.scheduleForm.get('date')?.value;
      if (professionalId && date) {
        this.scheduleService.getAvailableSlots(professionalId, date).subscribe(slots => {
          this.slots = slots;
          this.scheduleForm.get('slot')?.reset();
        });
      }
    });
  }

  onSubmit(): void {
    if (this.scheduleForm.valid) {
      console.log('Agendamento:', this.scheduleForm.value);
    }
  }
}