import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VehiclesService } from './services/vehicles.service';
import { Observable, of } from 'rxjs';
import { Vehicle } from './models/vehicle';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import {VehicleSearchComponent} from './vehicle-search-form/vehicle-search.component';

class MockVehicleService {
  vehicles = [];

  getAll(): Observable<Vehicle[]> {
    return of(this.vehicles);
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, VehicleListComponent, VehicleSearchComponent
      ],
      providers: [
        { provide: VehiclesService, useClass: MockVehicleService }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render vehicle search component', () => {
    const searchFormEl = fixture.nativeElement.querySelector('app-vehicle-search-form');
    expect(searchFormEl).not.toBeNull();
  });

});
