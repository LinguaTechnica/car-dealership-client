import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicle-filter-form',
  templateUrl: './vehicle-filter-form.component.html',
  styleUrls: ['./vehicle-filter-form.component.css']
})
export class VehicleFilterFormComponent implements OnInit {
  @Input() public vehicles: Vehicle[];
  @Output() public filterEvent: EventEmitter<Vehicle[]> = new EventEmitter<Vehicle[]>();
  public filterForm: FormGroup;
  public results: Vehicle[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      manufacturer: 'Select',
      model: 'Select',
      year: 'Select'
    });
  }

  initializeManufacturers(): string[] {
    const manufacturers = this.vehicles.map(vehicle => vehicle.manufacturer);
    return Array.from(new Set(manufacturers));
  }

  getModels(): string[] {
    const models = this.results.map(vehicle => vehicle.model);
    return Array.from(new Set(models));
  }

  getYears(): number[] {
    const years = this.results.map(vehicle => vehicle.year);
    return Array.from(new Set(years));
  }

  findManufacturer(): void {
    this.results = this.vehicles.filter(vehicle => vehicle.manufacturer === this.filterForm.controls.manufacturer.value);
  }

  emitResults(): void {
    this.filterEvent.emit(this.results);
  }
}
