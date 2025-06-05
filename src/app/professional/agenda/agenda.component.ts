import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: '<mat-card><h2>Agenda</h2><p>Veja seus agendamentos aqui.</p></mat-card>',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {}
