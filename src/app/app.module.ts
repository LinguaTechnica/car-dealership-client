import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
