import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleSearchService {

  constructor(private vehicleService: VehiclesService) { }

  getQueryResults(query: string): Observable<Vehicle[]> {
    return this.vehicleService.getAll();
  }
}
