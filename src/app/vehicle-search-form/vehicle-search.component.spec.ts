import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehicleSearchComponent } from './vehicle-search.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('VehicleSearchComponent', () => {
  let component: VehicleSearchComponent;
  let fixture: ComponentFixture<VehicleSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleSearchComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render vehicle search form', () => {
    const searchEl = fixture.nativeElement.querySelector('.vehicleSearch form');
    expect(searchEl).not.toBeNull();
  });

  it('should render search by keyword input field', () => {
    const queryInput = fixture.nativeElement.querySelector('#searchQuery');

    expect(queryInput).not.toBeNull();
    expect(component.searchForm.controls.query).toBeTruthy();
  });

  it('should validate search form', () => {
    const { query } = component.searchForm.controls;
    expect(component.searchForm.valid).toBeFalse();
    query.setValue('VW');
    expect(component.searchForm.valid).toBeTrue();
  });

  it('should alert message for invalid form input < 2 characters', () => {
    component.search();
    fixture.detectChanges();
    const alertEl = fixture.nativeElement.querySelector('#queryAlert');
    expect(alertEl.textContent).toContain(component.getAlert());
  });

  it('should handle successful search query', () => {
    const { query } = component.searchForm.controls;
    query.setValue('VW');
    component.search();
    fixture.detectChanges();
    const alertEl = fixture.nativeElement.querySelector('#queryAlert');
    expect(alertEl).toBeNull();

    component.searchEvent.subscribe(results => {
      expect(results).toEqual([]);
    });
  });

});
