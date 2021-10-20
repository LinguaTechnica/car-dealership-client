import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
      manufacturer: '',
      model: '',
      year: ''
    });
  }

  updateVehicleModel(): void {
    this.filterForm.valueChanges.subscribe(changes => {
      this.results = this.vehicles.filter( (vehicle: { manufacturer, model, year }) => (
        vehicle === changes
      ));
    });
  }

  getManufacturers(): string[] {
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
    this.emitResults();
  }

  findModel(): void {
    this.results = this.results.filter(vehicle => vehicle.model === this.filterForm.controls.model.value);
    this.emitResults();
  }

  findYear(): void {
    this.results = this.results.filter(vehicle => vehicle.year === this.filterForm.controls.year.value);
    this.emitResults();
  }

  emitResults(): void {
    // this.filterEvent.emit(this.results);
  }

  resetForm(): void {
    this.filterForm.reset({ manufacturer: '', model: '', year: ''});
    this.results = this.vehicles;
    this.emitResults();
  }
}
