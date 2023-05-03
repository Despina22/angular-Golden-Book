import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBooksComponent } from './layout-books.component';

describe('LayoutBooksComponent', () => {
  let component: LayoutBooksComponent;
  let fixture: ComponentFixture<LayoutBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
