import { NgModule } from '@angular/core';
import { MainComponent } from './component/main/main.component';
import { WeatherComponent } from './component/weather/weather.component';
import { HazardmapComponent } from './component/hazardmap/hazardmap.component';
import { AboutComponent } from './component/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes= [
  {path: 'main', component: MainComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'hazardmap', component: HazardmapComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
