import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExploreComponent } from './explore.component';

describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ExploreComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize filter form with specialty and name controls', () => {
    expect(component.filterForm.contains('specialty')).toBeTrue();
    expect(component.filterForm.contains('name')).toBeTrue();
  });

  it('should filter professionals by specialty', () => {
    component.filterForm.setValue({ specialty: 'Dentista', name: '' });
    expect(component.filteredProfessionals.length).toBe(2);
    expect(component.filteredProfessionals.every(p => p.specialty === 'Dentista')).toBeTrue();
  });

  it('should filter professionals by name', () => {
    component.filterForm.setValue({ specialty: '', name: 'Maria' });
    expect(component.filteredProfessionals.length).toBe(1);
    expect(component.filteredProfessionals[0].name).toContain('Maria Oliveira');
  });

  it('should log professional ID on showDetails', () => {
    spyOn(console, 'log');
    component.showDetails(1);
    expect(console.log).toHaveBeenCalledWith('Detalhes do profissional ID:', 1);
  });
});