import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { VehicleSearchService } from './vehicle-search.service';
import { Vehicle } from '../models/vehicle';
import {VehiclesService, vehiclesUrl} from './vehicles.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

class MockVehicleService {
  vehicles = [createVehicle()];

  getAll(): Observable<Vehicle[]> {
    return of(this.vehicles);
  }
}

describe('VehicleSearchService', () => {
  let service: VehicleSearchService;
  let httpTestingController: HttpTestingController;
  let vehicle: Vehicle;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: VehiclesService, useClass: MockVehicleService }
      ]
    });
    service = TestBed.inject(VehicleSearchService);
    httpTestingController = TestBed.inject(HttpTestingController);
    vehicle = createVehicle();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return manufacturer search results', () => {
    expect(service.getQueryResults(vehicle.manufacturer)).toContain(vehicle);
  });

  it('should get all vehicles', () => {
    const expected: Vehicle[] = [vehicle];
    expect(service.getAllVehicles()).toEqual(expected);
  });
});

function createVehicle(name: string = 'Test Vehicle'): Vehicle {
  const vehicle = new Vehicle();
  vehicle.id = '1a';
  vehicle.manufacturer = name;
  return vehicle;
}
