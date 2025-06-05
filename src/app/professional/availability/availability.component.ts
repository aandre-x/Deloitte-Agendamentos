import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-availability',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: '<mat-card><h2>Disponibilidade</h2><p>Configure seus horários aqui.</p></mat-card>',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent {}
