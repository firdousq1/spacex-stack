import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, UrlSerializer } from "@angular/router";

import { AppConfig } from "../app.config";

@Injectable({
  providedIn: "root",
})
export class SpacexService {
  constructor(
    private http: HttpClient,
    private urlSerializer: UrlSerializer,
    private router: Router
  ) {}

  getSpacex(filterParams) {
    const url = this._getUrl(filterParams);
    return this.http.get(url);
  }

  _getUrl(filterParams) {
    const queryParams = {...AppConfig.defaultFilter, ...filterParams };
    const urlTree = this.router.createUrlTree([], { queryParams: queryParams });
    const serializedParams = this.urlSerializer.serialize(urlTree);
    return  AppConfig.apiBaseURL.concat(serializedParams);
  }
}
