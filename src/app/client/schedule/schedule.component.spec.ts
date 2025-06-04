/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleComponent } from './schedule.component';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        ScheduleComponent,
        AppointmentCardComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize date form with 11/06/2025', () => {
    expect(component.dateForm.get('date')?.value).toEqual(new Date(2025, 5, 11));
  });

  it('should filter slots by selected date', () => {
    component.dateForm.setValue({ date: new Date(2025, 5, 11) });
    fixture.detectChanges();
    expect(component.filteredSlots.length).toBe(2);
    expect(component.filteredSlots.every(s => s.date === '2025-06-11')).toBeTrue();
  });

  it('should log appointment details on bookSlot', () => {
    spyOn(console, 'log');
    const slot = { id: 1, professional: 'Dr. João Silva', time: '09:00', date: '2025-06-11' };
    component.bookSlot(slot);
    expect(console.log).toHaveBeenCalledWith('Agendamento:', { client: 'Cliente Mock', ...slot });
  });
});*/
