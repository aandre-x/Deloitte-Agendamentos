/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        RegisterComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with name, email, password, confirmPassword, and role controls', () => {
    expect(component.registerForm.contains('name')).toBeTrue();
    expect(component.registerForm.contains('email')).toBeTrue();
    expect(component.registerForm.contains('password')).toBeTrue();
    expect(component.registerForm.contains('confirmPassword')).toBeTrue();
    expect(component.registerForm.contains('role')).toBeTrue();
  });

  it('should log form data on valid submit', () => {
    spyOn(console, 'log');
    component.registerForm.setValue({
      name: 'Teste',
      email: 'test@email.com',
      password: '123456',
      confirmPassword: '123456',
      role: 'client'
    });
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Dados do registro:', {
      name: 'Teste',
      email: 'test@email.com',
      password: '123456',
      confirmPassword: '123456',
      role: 'client'
    });
  });

  it('should show mismatch error if passwords do not match', () => {
    component.registerForm.setValue({
      name: 'Teste',
      email: 'test@email.com',
      password: '123456',
      confirmPassword: '654321',
      role: 'client'
    });
    expect(component.registerForm.hasError('mismatch')).toBeTrue();
  });
});*/
