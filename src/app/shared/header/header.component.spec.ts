import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo', () => {
    const logoEl = fixture.nativeElement.querySelector('#headerLogo');
    expect(logoEl).not.toBeNull();
  });

  it('should render title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const titleEl = fixture.nativeElement.querySelector('.headerTitle');
    expect(titleEl.textContent).toContain(component.title);
  });
});
