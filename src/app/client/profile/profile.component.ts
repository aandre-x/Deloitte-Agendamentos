import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: { name: string; email: string; phone?: string; birthDate?: string; address?: string } | null = null;
  profileForm: FormGroup;

  constructor(private clientService: ClientService, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      birthDate: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.clientService.getProfile().subscribe(profile => {
      this.profile = profile;
      this.profileForm.patchValue(profile);
    });
  }

  saveProfile(): void {
    const updatedProfile = this.profileForm.value;
    // Mock: Atualizar perfil (substituir por chamada ao backend)
    console.log('Perfil atualizado:', updatedProfile);
    this.profile = updatedProfile;
  }
}
