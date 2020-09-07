import { Component, OnInit } from '@angular/core';
import {AppConfig} from  "../../app.config";

@Component({
  selector: 'spacex-filters',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterHidden = true;
  filters = AppConfig.filters;
     
  constructor() { }

  ngOnInit(): void {
  }

  getFilterParam (propName, value) {
      return {[propName]:value}
  }

  toggleFilter(event) {
    this.filterHidden = !this.filterHidden;
  }
}
