import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleSearchComponent } from './vehicle-search-form/vehicle-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { VehicleFilterFormComponent } from './vehicle-filter-form/vehicle-filter-form.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NavComponent } from './shared/nav/nav.component';
import { InlineLoginFormComponent } from './shared/inline-login-form/inline-login-form.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    VehicleSearchComponent,
    HeaderComponent,
    VehicleFilterFormComponent,
    SearchPageComponent,
    NavComponent,
    InlineLoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
