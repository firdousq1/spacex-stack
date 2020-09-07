import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexContainerComponent } from './spacex-container.component';

describe('SpacexContainerComponent', () => {
  let component: SpacexContainerComponent;
  let fixture: ComponentFixture<SpacexContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
