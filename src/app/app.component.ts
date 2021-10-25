import { Component } from '@angular/core';
import { VehiclesService } from './services/vehicles.service';
import { Vehicle } from './models/vehicle';
import {VehicleSearchService} from './services/vehicle-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auto Galaxy';
  vehicles: Vehicle[] = [];
  results: Vehicle[] = [];

  constructor(private vehicleService: VehiclesService) {
    this.vehicleService.getAll().subscribe(vehicles => {
      this.vehicles = vehicles;
      this.results = vehicles;
    });
  }

  handleFilterResults(filterResults: Vehicle[]): void {
    this.results = filterResults;
  }
}
