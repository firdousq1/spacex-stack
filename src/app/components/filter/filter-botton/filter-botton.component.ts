import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'filter-botton',
  templateUrl: './filter-botton.component.html',
  styleUrls: ['./filter-botton.component.css']
})
export class FilterBottonComponent implements OnInit {
  @Input() filter : any 
  isActive: boolean = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
       this.isActive = this.checkActive(queryParams);
    });
  }

  checkActive(queryParams): boolean {
    const keys = Object.keys(queryParams)
    let isActive = false
    keys.forEach( key => {
      if( this.filter.hasOwnProperty(key) && queryParams[key] === this.filter[key]) {
        isActive = true;
      }
    });
    return isActive;
  }
}
