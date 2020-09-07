import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBottonComponent } from './filter-botton.component';

describe('FilterBottonComponent', () => {
  let component: FilterBottonComponent;
  let fixture: ComponentFixture<FilterBottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
