import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProfessionalService } from '../professional.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: { id: string; name: string }[] = [];

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit(): void {
    this.professionalService.getServices().subscribe(services => {
      this.services = services;
    });
  }
}
