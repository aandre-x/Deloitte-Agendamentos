import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ProfessionalService } from '../professional.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  filterForm: FormGroup;
  displayedColumns: string[] = ['id', 'date', 'time', 'service', 'client', 'status'];
  appointments: { id: string; date: string; time: string; service: string; client: string; status: string }[] = [];

  constructor(private fb: FormBuilder, private professionalService: ProfessionalService) {
    this.filterForm = this.fb.group({
      startDate: ['2025-06-01'],
      endDate: ['2025-06-30']
    });
  }

  ngOnInit(): void {
    this.loadAgenda();
  }

  loadAgenda(): void {
    const filter = this.filterForm.value;
    this.professionalService.getAgenda(filter).subscribe(appointments => {
      this.appointments = appointments;
    });
  }
}
