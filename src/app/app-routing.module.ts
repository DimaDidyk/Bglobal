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
  // { path: 'sim-order', redirectTo: '/', pathMatch: 'full'},
  { path: 'sim-order', component: SimOrderPageComponent },
  { path: '', component:  HomaPageComponent },
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
