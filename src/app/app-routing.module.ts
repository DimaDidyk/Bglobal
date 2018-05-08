import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { FlyFormComponent } from './fly-form/fly-form.component';
import { BannerComponent } from './banner/banner.component';

import { HomaPageComponent } from './homa-page/homa-page.component';
import { SimOrderPageComponent } from './sim-order-page/sim-order-page.component';
import { UserPageSimComponent } from './user-page-sim/user-page-sim.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component:  HomaPageComponent },
  { path: 'sim-order', component: SimOrderPageComponent },
  { path: 'user/sim', component:  UserPageSimComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
  	RouterModule
  ],
  declarations: []

})
export class AppRoutingModule { }
