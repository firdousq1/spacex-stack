import { Component, OnInit } from "@angular/core";
import {  ActivatedRoute } from "@angular/router";
import { Observable }  from 'rxjs'

import { SpacexService } from "../../services/spacex.service";

@Component({
  selector: "spacex-list",
  templateUrl: "./spacex-list.component.html",
  styleUrls: ["./spacex-list.component.css"],
})
export class SpacexListComponent implements OnInit {
  msgDataNotFound = 'Data Not Found';
  constructor(
    private spacexService: SpacexService,
    private route: ActivatedRoute,
  ) {}

   spacexList$:Observable<Object>

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.spacexList$ = this.spacexService.getSpacex(queryParams);
    })
  }
}

