import { Injectable } from '@angular/core';
import { Api } from '../models/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apis: Api[] = [
    {
      id: 'device-location',
      name: 'Device Location',
      description: 'Prevent fraud with real-time location verification.',
      icon: 'assets/images/icon/api/device-location.png',
      tryItFreeLink: '#',
      learnMoreLink: '#',
      definition: '',
      useCases: '',
      caseStudies: '',
      documentation: ''
    },
    {
      id: 'quality-on-demand',
      name: 'Quality on Demand',
      description: 'Ensure optimum connectivity for your applications',
      icon: 'assets/images/icon/api/quality-on-demand.png',
      tryItFreeLink: '#',
      learnMoreLink: '#',
      definition: '',
      useCases: '',
      caseStudies: '',
      documentation: ''
    },
    {
      id: 'device-reachability-status',
      name: 'Device Reachability Status',
      description: 'Provide SMS and data connectivity status of an user',
      icon: 'assets/images/icon/api/device-reach.png',
      tryItFreeLink: '#',
      learnMoreLink: '#',
      definition: '',
      useCases: '',
      caseStudies: '',
      documentation: ''
    },
    {
      id: 'number-verification',
      name: 'Number Verification',
      description: 'Verify phone numbers to enhance user authentication processes.',
      icon: 'assets/images/icon/api/number-verification.png',
      tryItFreeLink: '#',
      learnMoreLink: '#',
      definition: '',
      useCases: '',
      caseStudies: '',
      documentation: ''
    },
    {
      id: 'sim-swap',
      name: 'SIM Swap',
      description: 'Check real-time SIM card activation to enhance security and prevent fraud ',
      icon: 'assets/images/icon/api/sim-swap.png',
      tryItFreeLink: '#',
      learnMoreLink: '#',
      definition: '',
      useCases: '',
      caseStudies: '',
      documentation: ''
    },
    // Add more APIs...
  ];

  getAllApis(): Api[] {
    return this.apis;
  }

  getFeaturedApis(): Api[] {
    return this.apis.slice(0, 6);
  }

  getApiById(id: string): Api | undefined {
    return this.apis.find(api => api.id === id);
  }
}