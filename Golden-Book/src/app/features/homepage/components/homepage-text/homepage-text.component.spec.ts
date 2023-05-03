import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTextComponent } from './homepage-text.component';

describe('HomepageTextComponent', () => {
  let component: HomepageTextComponent;
  let fixture: ComponentFixture<HomepageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
