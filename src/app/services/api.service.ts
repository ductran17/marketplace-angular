import { Injectable } from '@angular/core';
import { Api } from '../models/api.model';
import { DEVICE_LOCATION_API } from '../models/device-location-api'
import { DEVICE_REACHABILITY_STATUS_API } from '../models/device-reachability-status-api'
import { NUMBER_VERIFICATION_API } from '../models/number-verification-api';
import { QUALITY_ON_DEMAND_API } from '../models/quality-on-demand-api';
import { SIM_SWAP_API } from '../models/sim-swap-api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apis: Api[] = [DEVICE_LOCATION_API, DEVICE_REACHABILITY_STATUS_API,NUMBER_VERIFICATION_API,QUALITY_ON_DEMAND_API,
    SIM_SWAP_API
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