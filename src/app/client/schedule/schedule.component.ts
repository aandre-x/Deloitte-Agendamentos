import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';
import { ProfessionalService } from '../../professional/professional.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from '../../shared/models/appointment.model';

interface Slot {
  id: number;
  professional: string;
  time: string;
  date: string;
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    AppointmentCardComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  dateForm: FormGroup;
  appointmentForm: FormGroup;
  slots: Slot[] = [];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private professionalService: ProfessionalService
  ) {
    this.dateForm = this.fb.group({
      date: [new Date(2025, 5, 11)]
    });
    this.appointmentForm = this.fb.group({
      matricula: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      observacoes: ['']
    });
  }

  ngOnInit(): void {
    this.loadSlots();
    this.dateForm.get('date')?.valueChanges.subscribe(() => this.loadSlots());
  }

  private loadSlots(): void {
    const selectedDate = this.dateForm.get('date')?.value;
    if (selectedDate) {
      const formattedDate = this.formatDate(selectedDate);
      this.professionalService.getAgenda({ startDate: formattedDate, endDate: formattedDate }).subscribe(appointments => {
        this.slots = appointments.map(a => ({
          id: parseInt(a.id, 10),
          professional: a.professional,
          time: a.time,
          date: a.date
        }));
      });
    }
  }

  private formatDate(date: Date): string {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  }

  openAppointmentDialog(slot: Slot): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '400px',
      data: { slot, form: this.appointmentForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const appointment: Appointment = {
          id: Date.now().toString(),
          date: slot.date,
          time: slot.time,
          service: 'Consulta',
          professional: slot.professional,
          client: result.nome,
          status: 'Pendente'
        };
        console.log('Agendamento:', appointment);
      }
      this.appointmentForm.reset();
    });
  }
}

@Component({
  selector: 'app-appointment-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  template: `
    <h2 mat-dialog-title>Confirmar Agendamento</h2>
    <mat-dialog-content>
      <p>Profissional: {{ data.slot.professional }}</p>
      <p>Data: {{ data.slot.date }}</p>
      <p>Horário: {{ data.slot.time }}</p>
      <form [formGroup]="data.form">
        <mat-form-field appearance="fill">
          <mat-label>Matrícula</mat-label>
          <input matInput formControlName="matricula" type="number" required>
          <mat-error *ngIf="data.form.get('matricula')?.hasError('required')">Matrícula é obrigatória</mat-error>
          <mat-error *ngIf="data.form.get('matricula')?.hasError('pattern')">Apenas números</mat-error>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Nome</mat-label>
          <input matInput formControlName="nome" required>
          <mat-error *ngIf="data.form.get('nome')?.hasError('required')">Nome é obrigatório</mat-error>
          <mat-error *ngIf="data.form.get('nome')?.hasError('minlength')">Mínimo 3 caracteres</mat-error>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Observações</mat-label>
          <textarea matInput formControlName="observacoes"></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="dialogRef.close()">Cancelar</button>
      <button mat-button [disabled]="data.form.invalid" (click)="dialogRef.close(data.form.value)">Confirmar</button>
    </mat-dialog-actions>
  `
})
export class AppointmentDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { slot: Slot; form: FormGroup }
  ) {}
}
