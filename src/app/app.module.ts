import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './component/weather/weather.component';
import { HazardmapComponent } from './component/hazardmap/hazardmap.component';
import { MainComponent } from './component/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './component/about/about.component';


const routes: Routes= [
  {path: 'main', component: MainComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'hazardmap', component: HazardmapComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HazardmapComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
