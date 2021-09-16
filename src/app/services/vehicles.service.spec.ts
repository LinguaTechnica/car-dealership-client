import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VehiclesService, vehiclesUrl } from './vehicles.service';
import { Vehicle } from '../models/vehicle';

describe('VehiclesService', () => {
  let service: VehiclesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, HttpClientModule ]
    });
    service = TestBed.inject(VehiclesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all vehicles', () => {
    const expected: Vehicle[] = [];

    service.getAll().subscribe(vehicles => {
      expect(vehicles).toEqual(expected);
    });

    const res = httpTestingController.expectOne(vehiclesUrl);
    res.flush(expected);
  });
});
