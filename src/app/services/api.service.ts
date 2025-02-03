import { Injectable } from '@angular/core';
import { Api } from '../models/api.model';
import * as ApiModels from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apis = [
    ApiModels.DEVICE_LOCATION_API,
    ApiModels.DEVICE_REACHABILITY_STATUS_API,
    ApiModels.NUMBER_VERIFICATION_API,
    ApiModels.QUALITY_ON_DEMAND_API,
    ApiModels.SIM_SWAP_API
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