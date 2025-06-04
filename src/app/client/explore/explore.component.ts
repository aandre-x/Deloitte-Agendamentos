import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  searchForm: FormGroup;
  services: { id: number; name: string; description: string }[] = [];

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit(): void {
    this.clientService.getServices().subscribe(services => {
      this.services = services;
    });
  }

  search(): void {
    const query = this.searchForm.get('query')?.value?.toLowerCase() || '';
    this.clientService.getServices().subscribe(services => {
      this.services = services.filter(service => service.name.toLowerCase().includes(query));
    });
  }
}
