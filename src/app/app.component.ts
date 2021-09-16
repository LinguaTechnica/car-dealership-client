import { Component } from '@angular/core';
import { VehiclesService } from './services/vehicles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auto Galaxy';
  vehicles = [];

  constructor(private vehicleService: VehiclesService) {
    this.vehicleService.getAll().subscribe(vehicles => this.vehicles = vehicles);
  }
}
