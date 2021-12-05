import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './component/weather/weather.component';
import { HazardmapComponent } from './component/hazardmap/hazardmap.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HazardmapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
