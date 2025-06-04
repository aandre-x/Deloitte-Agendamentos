import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

interface Service {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  serviceForm: FormGroup;
  services: Service[] = [
    { id: '1', name: 'Consulta Médica', description: 'Consulta geral' },
    { id: '2', name: 'Fisioterapia', description: 'Sessão de fisioterapia' }
  ];
  displayedColumns = ['name', 'description', 'actions'];
  editingId: string | null = null;

  constructor(private fb: FormBuilder) {
    this.serviceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required]
    });
  }

  addService(): void {
    if (this.serviceForm.valid) {
      const service: Service = {
        id: this.editingId || Date.now().toString(),
        ...this.serviceForm.value
      };
      if (this.editingId) {
        this.services = this.services.map(s => s.id === this.editingId ? service : s);
      } else {
        this.services.push(service);
      }
      this.serviceForm.reset();
      this.editingId = null;
    }
  }

  editService(service: Service): void {
    this.editingId = service.id;
    this.serviceForm.patchValue(service);
  }

  deleteService(id: string): void {
    this.services = this.services.filter(s => s.id !== id);
  }
}