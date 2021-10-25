import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehiclesService } from './services/vehicles.service';
import { Vehicle } from './models/vehicle';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleSearchComponent } from './vehicle-search-form/vehicle-search.component';
import { HeaderComponent } from './shared/header/header.component';
import { VehicleFilterFormComponent } from './vehicle-filter-form/vehicle-filter-form.component';
import { VehicleColor } from './common/vehicle-colors.enum';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

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
        AppComponent, VehicleListComponent, VehicleSearchComponent,
        HeaderComponent, VehicleFilterFormComponent, VehicleDetailComponent
      ],
      imports: [ FormsModule, ReactiveFormsModule ],
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
    const searchFormEl = fixture.nativeElement.querySelector('app-vehicle-search');
    expect(searchFormEl).not.toBeNull();
  });

  it('should render vehicle filter form', () => {
    const filterFormEl = fixture.nativeElement.querySelector('app-vehicle-filter-form');
    expect(filterFormEl).not.toBeNull();
  });

  it('should render filter results from form event', () => {
    const expected: Vehicle[] = [{id: '100', manufacturer: 'Chevrolet', model: 'Malibu', year: 2000, color: VehicleColor.black}];
    component.handleFilterResults(expected);
    fixture.detectChanges();
    const vehicleEl = fixture.nativeElement.querySelector('app-vehicle-detail');
    expect(vehicleEl.textContent).toContain('Chevrolet');
  });
});
