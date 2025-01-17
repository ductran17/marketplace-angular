import { Component } from '@angular/core';

@Component({
  selector: 'app-api-catalog',
  templateUrl: './api-catalog.component.html',
  styleUrls: ['./api-catalog.component.css']
})
export class ApiCatalogComponent {
  apis = [
    { name: 'API 1', description: 'Description 1', image: 'assets/images/api1.jpg' },
    { name: 'API 2', description: 'Description 2', image: 'assets/images/api2.jpg' }
  ];
}