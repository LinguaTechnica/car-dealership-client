import { Component } from '@angular/core';
import { VehiclesService } from './services/vehicles.service';
import { Vehicle } from './models/vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auto Galaxy';
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehiclesService) {
    this.vehicleService.getAll().subscribe(vehicles => this.vehicles = vehicles);
  }

  handleFilterResults(filterResults: Vehicle[]): void {
    this.vehicles = filterResults;
  }
}
