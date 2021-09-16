import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehicleListComponent } from './vehicle-list.component';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleListComponent ]
    });

    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of vehicles', () => {
    fixture.detectChanges();
    const vehiclesEl = fixture.nativeElement.querySelector('.vehicles');
    expect(vehiclesEl).not.toBeNull();
  });
});
