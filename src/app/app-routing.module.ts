import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeSliderComponent } from './home-slider/home-slider.component';
import { FlyFormComponent } from './fly-form/fly-form.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full'},
	{ path: 'sim-order', component: BannerComponent },
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
