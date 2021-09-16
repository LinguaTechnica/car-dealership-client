import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VehicleListComponent } from './vehicle-list.component';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';
import { Vehicle } from '../models/vehicle';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleListComponent, VehicleDetailComponent ]
    });

    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    component.vehicles = [createVehicle()];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of vehicles', () => {
    const vehiclesEl = fixture.nativeElement.querySelector('.vehicles');
    const vehicleEls = fixture.debugElement.queryAll(By.directive(VehicleDetailComponent));
    expect(vehiclesEl).not.toBeNull();
    expect(vehicleEls.length).toEqual(1);
  });
});

function createVehicle(name: string = 'Vehicle Name'): Vehicle {
  const vehicle = new Vehicle();
  vehicle.id = '123abc';
  vehicle.name = name;
  return vehicle;
}
