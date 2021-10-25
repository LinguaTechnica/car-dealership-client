import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { vehicles as vehiclesList } from '../../tests/vehicles.fixture';
import { VehicleFilterFormComponent } from './vehicle-filter-form.component';
import { Vehicle } from '../models/vehicle';

// @ts-ignore
const vehicles: Vehicle[] = vehiclesList;

describe('VehicleFilterFormComponent', () => {
  let component: VehicleFilterFormComponent;
  let fixture: ComponentFixture<VehicleFilterFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleFilterFormComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    });

    fixture = TestBed.createComponent(VehicleFilterFormComponent);
    component = fixture.componentInstance;
    component.vehicles = vehicles;
    component.results = vehicles;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render filter form with make/manufacturer, model and year', () => {
    const filtersForm = fixture.nativeElement.querySelector('.vehicleFilters form');

    expect(filtersForm.querySelector('#manufacturer')).not.toBeNull();
    expect(filtersForm.querySelector('#vehicleModel')).not.toBeNull();
    expect(filtersForm.querySelector('#year')).not.toBeNull();
  });

  it('should update model and year options on manufacturer change', () => {
    component.vehicles = vehicles;
    component.filterForm.controls.manufacturer.setValue('Tesla');
    component.findManufacturer();

    fixture.detectChanges();
    const modelOptionsEls = fixture.nativeElement.querySelectorAll('.modelOption');
    const yearOptionsEls = fixture.nativeElement.querySelectorAll('.yearOption');

    expect(modelOptionsEls.length).toEqual(2);
    expect(yearOptionsEls.length).toEqual(2);
    expect(component.results.length).toEqual(2);
    for (const result of component.results) {
      expect(result.manufacturer).toEqual('Tesla');
    }
  });

  it('should emit filter results on submit', () => {
    spyOn(component, 'emitResults');
    const buttonEl = fixture.nativeElement.querySelector('.btn');
    buttonEl.click();
    expect(component.emitResults).toHaveBeenCalled();
  });

  it('should render unique list of manufacturers', () => {
    component.vehicles = vehicles;
    component.getManufacturers();
    fixture.detectChanges();

    const manufacturerOptionsEls = fixture.nativeElement.querySelectorAll('.manufacturerOption');

    expect(component.vehicles.length).toEqual(10);
    expect(manufacturerOptionsEls.length).toEqual(5);
  });

  it('should get unique list of models when filtered on manufacturer', () => {
    component.vehicles = vehicles;
    component.filterForm.controls.manufacturer.setValue('Tesla');
    component.findManufacturer();
    fixture.detectChanges();

    const modelOptionsEls = fixture.nativeElement.querySelectorAll('.modelOption');

    expect(component.vehicles.length).toEqual(10, 'Vehicles length');
    expect(modelOptionsEls.length).toEqual(2, 'Model options');
  });

  it('should get unique list of years when filtered on manufacturer', () => {
    component.vehicles = vehicles;
    component.filterForm.controls.manufacturer.setValue('Tesla');
    component.findManufacturer();
    fixture.detectChanges();

    const yearOptionEls = fixture.nativeElement.querySelectorAll('.yearOption');

    expect(component.vehicles.length).toEqual(10, 'Vehicles length');
    expect(yearOptionEls.length).toEqual(2, 'Model options');
  });
});
