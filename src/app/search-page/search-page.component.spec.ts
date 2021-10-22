import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchPageComponent } from './search-page.component';
import { VehicleSearchService } from '../services/vehicle-search.service';
import { Vehicle } from '../models/vehicle';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';
import { By } from '@angular/platform-browser';

class MockVehicleSearchService {
  vehicles = [createVehicle()];

  getAllVehicles(): Vehicle[] {
    return this.vehicles;
  }
}

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent, VehicleListComponent, VehicleDetailComponent ],
      providers: [
        { provide: VehicleSearchService, useClass: MockVehicleSearchService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render vehicles list', () => {
    const vehiclesEl = fixture.nativeElement.querySelectorAll('.vehicles');
    const vehicleEls = fixture.debugElement.queryAll(By.directive(VehicleListComponent));
    expect(vehicleEls.length).toEqual(1);
    expect(vehiclesEl[0].textContent).toContain('Testla');
  });
});

function createVehicle(name: string = 'Testla'): Vehicle {
  const vehicle = new Vehicle();
  vehicle.id = '1a';
  vehicle.manufacturer = name;
  return vehicle;
}
