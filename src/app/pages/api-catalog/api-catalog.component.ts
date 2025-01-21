import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service'; // Ensure you import the ApiService
import { Api } from '../../models/api.interface';

@Component({
  selector: 'app-api-catalog',
  templateUrl: './api-catalog.component.html',
  styleUrls: ['./api-catalog.component.css']
})
export class ApiCatalogComponent {
  apis: Api[] = []; // Ensure this is defined

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apis = this.apiService.getAllApis(); // Ensure this method retrieves all APIs
  }
}