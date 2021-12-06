import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './component/weather/weather.component';
import { HazardmapComponent } from './component/hazardmap/hazardmap.component';
import { MainComponent } from './component/main/main.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes= [
  {path: 'main', component: MainComponent,
    children: [
      {
        path: 'weather', component: WeatherComponent
      },
      {
        path: 'hazardmap', component: HazardmapComponent
      }
    ]
  },
  {path: '', redirectTo: '/main', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HazardmapComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
