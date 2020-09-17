import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute} from "@angular/router";

import { FilterBottonComponent } from "./filter-botton.component";
import { Observable } from 'rxjs';

describe("FilterBottonComponent", () => {
  let component: FilterBottonComponent;
  let fixture: ComponentFixture<FilterBottonComponent>;
  
  const fakeActivatedRoute = new Observable(subscriber => {
    subscriber.next({
      launch_year: "2006",
      launch_success: "True",
      land_success: "False",
    })  
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBottonComponent],
     providers: [{provide: ActivatedRoute, useValue:  {queryParams:fakeActivatedRoute}}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBottonComponent);
    component = fixture.componentInstance;
    component.filter = { launch_year: "2005" };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  
  it("should retrun false: query parameter and filter has not launch year 2005", () => {
    const queryParams = {
      launch_year: "2006",
      launch_success: "True",
      land_success: "False",
    };
    component.filter = { launch_year: "2005" };
    const isActive = component.checkActive(queryParams)
    expect(isActive).toBeFalse();
  });

  it("checkActive() should retrun true: query parameter and filter has launch year 2005", () => {
    const queryParams = {
      launch_year: "2005",
      launch_success: "True",
      land_success: "False",
    };
    component.filter = { launch_year: "2005" };
    expect(component.checkActive(queryParams)).toBeTrue();
  });

  it("checkActive() should retrun true: query parameter and filter has launch success true", () => {
    const queryParams = {
      launch_year: "2005",
      launch_success: "True",
      land_success: "False",
    };
    component.filter = {launch_success: "True"};
    expect(component.checkActive(queryParams)).toBeTrue();
  });

  it("checkActive() should retrun false: query parameter and filter has not launch success false", () => {
    const queryParams = {
      launch_year: "2005",
      launch_success: "True",
      land_success: "False",
    };
    component.filter = {launch_success: "False"};
    expect(component.checkActive(queryParams)).toBeFalse();
  });

  it("checkActive() should retrun true: query parameter and filter has land sucess false", () => {
    const queryParams = {
      launch_year: "2005",
      launch_success: "True",
      land_success: "False",
    };
    component.filter = {land_success: "False"} ;
    expect(component.checkActive(queryParams)).toBeTrue();
  });

  it("checkActive() should retrun false: query parameter and filter has not land sucess false", () => {
    const queryParams = {
      launch_year: "2005",
      launch_success: "True",
      land_success: "True",
    };
    component.filter = {land_success: "False"} ;
    expect(component.checkActive(queryParams)).toBeFalse();
  });

 
});
