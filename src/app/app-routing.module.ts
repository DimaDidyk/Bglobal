import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { FlyFormComponent } from './fly-form/fly-form.component';
import { BannerComponent } from './banner/banner.component';

import { HomaPageComponent } from './homa-page/homa-page.component';
import { SimOrderPageComponent } from './sim-order-page/sim-order-page.component';
import { UserPageSimComponent } from './user-page-sim/user-page-sim.component';
import { ReturningCustomerPageComponent } from './returning-customer-page/returning-customer-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component:  HomaPageComponent },
  { path: 'user/sim', component:  UserPageSimComponent },
  { path: 'sim-order', component: SimOrderPageComponent },
  { path: 'sim-order/:package', component:  ReturningCustomerPageComponent },
  // { path: 'sim-order/returning-customer', component:  ReturningCustomerPageComponent },
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
