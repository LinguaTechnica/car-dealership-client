import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleSearchService {
  public vehicles: Vehicle[];

  constructor(private vehicleService: VehiclesService) {
    this.vehicleService.getAll().subscribe(data => this.vehicles = data);
  }

  getQueryResults(query: string): Vehicle[] {
    return this.vehicles.filter(vehicle => vehicle.manufacturer === query);
  }

  getAllVehicles(): Vehicle[] {
    return this.vehicles;
  }
}
