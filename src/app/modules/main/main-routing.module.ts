import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/component/about/about.component';
import { HazardmapComponent } from 'src/app/component/hazardmap/hazardmap.component';
import { MainComponent } from 'src/app/component/main/main.component';
import { WeatherComponent } from 'src/app/component/weather/weather.component';

const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
    children:[
      {
        path: 'main', 
        component: MainComponent
      },
      {
        path: 'weather', 
        component: WeatherComponent
      },
      {
        path: 'hazardmap', 
        component: HazardmapComponent
      },
      {
        path: 'about', 
        component: AboutComponent
      }, 
      {
        path: '', 
        redirectTo: '/main', 
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
