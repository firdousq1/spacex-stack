import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterBottonComponent } from './components/filter/filter-botton/filter-botton.component';
import { SpacexListComponent } from './components/spacex-list/spacex-list.component';
import { SpacexItemComponent } from './components/spacex-list/spacex-item/spacex-item.component';
import { from } from 'rxjs';
import { SpacexContainerComponent } from './components/spacex-container/spacex-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterBottonComponent,
    SpacexListComponent,
    SpacexItemComponent,
    SpacexContainerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot([
    { path: '', component: SpacexContainerComponent },
], {
    initialNavigation: 'enabled'
}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
