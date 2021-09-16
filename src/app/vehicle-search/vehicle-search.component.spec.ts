import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehicleSearchComponent } from './vehicle-search.component';

describe('VehicleSearchComponent', () => {
  let component: VehicleSearchComponent;
  let fixture: ComponentFixture<VehicleSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleSearchComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render vehicle search form', () => {
    const searchEl = fixture.nativeElement.querySelector('form.vehicleSearch');
    expect(searchEl).not.toBeNull();
  });
});
