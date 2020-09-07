import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexItemComponent } from './spacex-item.component';

describe('SpacexItemComponent', () => {
  let component: SpacexItemComponent;
  let fixture: ComponentFixture<SpacexItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
