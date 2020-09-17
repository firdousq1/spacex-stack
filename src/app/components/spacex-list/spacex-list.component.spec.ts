import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { SpacexListComponent } from './spacex-list.component';
import { SpacexService } from "../../services/spacex.service";
import { Observable } from 'rxjs';
import { Observer, of } from 'rxjs';

let mockData = [
  {
    "flight_number": 1,
    "mission_name": "FalconSat",
    "mission_id": [],
    "upcoming": false,
    "launch_year": "2006",
    "launch_date_unix": 1143239400,
    "rocket": {
      "rocket_id": "falcon1",
      "first_stage": {
        "cores": [
          {
            "land_success": true,
          }
        ]
      },
      
    },
    "launch_success": false,
    "links": {
      "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
      "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    }
     
  },
];

const fakeActivatedRoute = new Observable(subscriber => {
  subscriber.next({
    launch_year: "2006",
    launch_success: "True",
    land_success: "False",
  })  
});
            
class MockSpacexService {
  getSpacex = (queryParams) =>  new Observable(subscriber => {
      subscriber.next(mockData) 
    });
}

describe('SpacexListComponent', () => {
  let component: SpacexListComponent;
  let fixture: ComponentFixture<SpacexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexListComponent ],
      providers: [ { provide: SpacexService, useClass: MockSpacexService },
        {provide: ActivatedRoute, useValue:  {queryParams:fakeActivatedRoute}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
