import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/vehicle';
import { environment as config } from '../../environments/environment';

export const vehiclesUrl = config.apiVehicleUrl;

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  public vehicles = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(vehiclesUrl);
  }
}
