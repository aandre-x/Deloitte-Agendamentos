import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './appointment-card.html',
  styleUrls: ['./appointment-card.scss']
})
export class AppointmentCardComponent {
  @Input() appointment: any;
  @Input() isProfessional = false;
  @Output() cancel = new EventEmitter<string>();
  @Output() updateStatus = new EventEmitter<{ appointmentId: string; status: string }>();

  emitCancel(): void {
    this.cancel.emit(this.appointment?.id);
  }

  emitStatus(status: string): void {
    this.updateStatus.emit({ appointmentId: this.appointment?.id, status });
  }
}