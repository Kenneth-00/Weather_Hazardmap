import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './component/weather/weather.component';
import { HazardmapComponent } from './component/hazardmap/hazardmap.component';
import { MainComponent } from './component/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './component/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/main/header/header.component';
import { FooterComponent } from './component/main/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherComponent,
    HazardmapComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
