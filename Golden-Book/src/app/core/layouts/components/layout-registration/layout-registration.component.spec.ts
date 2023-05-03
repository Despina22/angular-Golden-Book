import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRegistrationComponent } from './layout-registration.component';

describe('LayoutRegistrationComponent', () => {
  let component: LayoutRegistrationComponent;
  let fixture: ComponentFixture<LayoutRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
