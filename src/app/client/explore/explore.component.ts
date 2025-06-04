import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface Professional {
  id: number;
  name: string;
  specialty: string;
  city: string;
}

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  filterForm: FormGroup;
  professionals: Professional[] = [
    { id: 1, name: 'Dr. João Silva', specialty: 'Dentista', city: 'São Paulo' },
    { id: 2, name: 'Dra. Maria Oliveira', specialty: 'Médico', city: 'Rio de Janeiro' },
    { id: 3, name: 'Dr. Pedro Santos', specialty: 'Dentista', city: 'Belo Horizonte' },
    { id: 4, name: 'Dra. Ana Costa', specialty: 'Médico', city: 'Curitiba' }
  ];
  filteredProfessionals: Professional[] = [...this.professionals];
  specialties: string[] = ['Dentista', 'Médico'];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      specialty: [''],
      name: ['']
    });
  }

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(filters => {
      this.filteredProfessionals = this.professionals.filter(p =>
        (!filters.specialty || p.specialty === filters.specialty) &&
        (!filters.name || p.name.toLowerCase().includes(filters.name.toLowerCase()))
      );
    });
  }

  showDetails(id: number): void {
    console.log('Detalhes do profissional ID:', id);
  }
}