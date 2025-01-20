import { Component } from '@angular/core';

@Component({
  selector: 'app-api-catalog',
  templateUrl: './api-catalog.component.html',
  styleUrls: ['./api-catalog.component.css']
})
export class ApiCatalogComponent {
  apis = [
    { name: 'Device Location', description: 'Prevent fraud with real-time location verification.', image: 'assets/images/icon/api/device-location.png' },
    { name: 'Quality on Demand', description: 'Ensure optimum connectivity for your applications', image: 'assets/images/icon/api/quality-on-demand.png' }
  ];
}