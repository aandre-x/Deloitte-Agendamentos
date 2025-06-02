import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;
  profileImage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['Usuário Exemplo', [Validators.required, Validators.minLength(3)]],
      email: ['usuario@exemplo.com', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\d{10,11}$/)]],
      birthDate: ['', [Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      address: ['', [Validators.maxLength(100)]]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        console.log('Por favor, selecione uma imagem.');
      }
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const profileData = {
        ...this.profileForm.value,
        profileImage: this.profileImage
      };
      console.log('Perfil atualizado:', profileData);
    }
  }
}