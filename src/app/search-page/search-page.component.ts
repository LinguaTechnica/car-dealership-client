import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleSearchService } from '../services/vehicle-search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public vehicles: Vehicle[];

  constructor(private service: VehicleSearchService) { }

  ngOnInit(): void {
    this.vehicles = this.service.getAllVehicles();
  }

}
