import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehicleDetailComponent } from './vehicle-detail.component';
import {Vehicle} from '../models/vehicle';

describe('VehicleDetailComponent', () => {
  let component: VehicleDetailComponent;
  let fixture: ComponentFixture<VehicleDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDetailComponent ]
    });

    fixture = TestBed.createComponent(VehicleDetailComponent);
    component = fixture.componentInstance;
    component.vehicle = createVehicle();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render vehicle', () => {
    const el = fixture.nativeElement.querySelector('.vehicle');
    expect(el.textContent).toContain('Vehicle Name');
  });
});

function createVehicle(name: string = 'Vehicle Name'): Vehicle {
  const vehicle = new Vehicle();
  vehicle.id = '123abc';
  vehicle.name = name;
  return vehicle;
}
