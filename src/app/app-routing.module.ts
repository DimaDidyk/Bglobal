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
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { AvailableCountriesComponent } from './available-countries/available-countries.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { UserPageComponent } from './user-page/user-page.component';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component:  HomaPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
  { path: 'distributors', component: SimOrderPageComponent },
  { path: 'sim-order/:package', component:  ReturningCustomerPageComponent,
    children: [
      { path: '', component:  ClientInfoComponent },
      { path: 'change-package', component: FlyFormComponent },
    ]},
  { path: 'about-us', component:  AboutUsPageComponent },
  { path: 'faq', component:  FaqPageComponent },
  { path: 'contact-us', component:  ContactUsPageComponent },
  { path: 'thank-you', component:  ThankYouPageComponent },
  { path: 'available-countries', component:  AvailableCountriesComponent },
  { path: 'user/sim', component:  UserPageSimComponent },
  { path: 'user/info', component:  InfoPageComponent },
  { path: 'user', component:  UserPageComponent },
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
