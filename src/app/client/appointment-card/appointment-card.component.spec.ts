import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppointmentCardComponent } from './appointment-card.component';

describe('AppointmentCardComponent', () => {
  let component: AppointmentCardComponent;
  let fixture: ComponentFixture<AppointmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatButtonModule, AppointmentCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentCardComponent);
    component = fixture.componentInstance;
    component.slot = { id: 1, professional: 'Dr. João Silva', time: '10:00', date: '2025-06-11' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display slot details', () => {
    const content = fixture.debugElement.nativeElement.querySelector('mat-card-content');
    expect(content?.textContent).toContain('Dr. João Silva');
    expect(content?.textContent).toContain('10:00');
    expect(content?.textContent).toContain('2025-06-11');
  });

  it('should emit book event on button click', () => {
    spyOn(component.book, 'emit');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button?.click();
    expect(component.book.emit).toHaveBeenCalledWith(component.slot!); 
  });
});