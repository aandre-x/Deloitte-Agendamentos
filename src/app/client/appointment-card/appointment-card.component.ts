import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss']
})
export class AppointmentCardComponent {
  @Input() slot: { id: number; professional: string; time: string; date: string } | null = null;
  @Output() book = new EventEmitter<{ id: number; professional: string; time: string; date: string }>();

  bookSlot(): void {
    if (this.slot) {
      this.book.emit(this.slot);
    }
  }
}