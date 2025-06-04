import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProfessionalService } from '../professional.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceForm: FormGroup;
  services: { id: string; name: string; description: string }[] = [];
  editingId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private professionalService: ProfessionalService
  ) {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.professionalService.getServices().subscribe((services: { id: string; name: string; description: string }[]) => {
      this.services = services;
    });
  }

  submitService(): void {
    if (this.serviceForm.valid) {
      const service = this.serviceForm.value;
      if (this.editingId) {
        this.professionalService.updateService({ id: this.editingId, ...service }).subscribe((updatedService: { id: string; name: string; description: string }) => {
          this.services = this.services.map(s => s.id === updatedService.id ? updatedService : s);
          this.resetForm();
        });
      } else {
        this.professionalService.createService(service).subscribe((newService: { id: string; name: string; description: string }) => {
          this.services.push(newService);
          this.resetForm();
        });
      }
    }
  }

  editService(service: { id: string; name: string; description: string }): void {
    this.editingId = service.id;
    this.serviceForm.patchValue({
      name: service.name,
      description: service.description
    });
  }

  deleteService(id: string): void {
    this.professionalService.deleteService(id).subscribe(() => {
      this.services = this.services.filter(s => s.id !== id);
    });
  }

  resetForm(): void {
    this.serviceForm.reset();
    this.editingId = null;
  }
}
