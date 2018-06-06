import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// anumation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// materual
import { 
 MatAutocompleteModule,
 MatProgressBarModule,
 MatMenuTrigger,
 MatMenuModule,
 MatTooltipModule,
 MatRadioModule,
 MatIconModule,
 MatButtonModule,
 MatCheckboxModule,
 MatSelectModule,
 MatNativeDateModule,
 MatDatepickerModule,
 MatInputModule,
 MatTabsModule,
 MatExpansionModule,
 MatFormFieldModule } from '@angular/material';

import { HttpClientModule, HttpClient } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

// main componenrts
import { AppComponent } from './app.component';
import { HeaderComponent, DialogSignIn, DialogMessage } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// ngx-swiper-wrapper
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
// Mask input
import {NgxMaskModule} from 'ngx-mask';
// routing
import { AppRoutingModule } from './/app-routing.module';


import { HomeSliderComponent } from './home-slider/home-slider.component';
import { FlyFormComponent } from './fly-form/fly-form.component';
import { BannerComponent } from './banner/banner.component';
import { PaymentComponent } from './payment/payment.component';
import { TotalComponent } from './total/total.component';
import { AdditionallyComponent } from './additionally/additionally.component';
import { FormSimComponent } from './form-sim/form-sim.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { SimActiveFormComponent } from './sim-active-form/sim-active-form.component';
import { HomaPageComponent } from './homa-page/homa-page.component';
import { SimOrderPageComponent } from './sim-order-page/sim-order-page.component';
import { PromotionComponent } from './promotion/promotion.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { OffersComponent } from './offers/offers.component';
import { UserPageSimComponent } from './user-page-sim/user-page-sim.component';
import { ChosenPackageComponent } from './chosen-package/chosen-package.component';
import { ReturningCustomerPageComponent } from './returning-customer-page/returning-customer-page.component';
import { ReturningChosenPackageComponent } from './returning-chosen-package/returning-chosen-package.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SearchAddressPipe } from './search-address.pipe';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { AvailableCountriesComponent } from './available-countries/available-countries.component';
import { InfoPageComponent, DialogUpdateUserInfo, DialogUpdateCardInfo } from './info-page/info-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UsageLogComponent } from './usage-log/usage-log.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogSignIn,
    DialogMessage,
    FooterComponent,
    HomeSliderComponent,
    FlyFormComponent,
    BannerComponent,
    PaymentComponent,
    TotalComponent,
    AdditionallyComponent,
    FormSimComponent,
    ClientInfoComponent,
    SimActiveFormComponent,
    HomaPageComponent,
    SimOrderPageComponent,
    PromotionComponent,
    DetailsFormComponent,
    OffersComponent,
    UserPageSimComponent,
    ChosenPackageComponent,
    ReturningCustomerPageComponent,
    ReturningChosenPackageComponent,
    DeliveryComponent,
    SearchAddressPipe,
    AboutUsPageComponent,
    FaqPageComponent,
    ContactUsPageComponent,
    ThankYouPageComponent,
    AvailableCountriesComponent,
    DialogUpdateUserInfo,
    DialogUpdateCardInfo,
    InfoPageComponent,
    UserPageComponent,
    PersonalDetailsComponent,
    UsageLogComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatRadioModule,
    MatTooltipModule,
    MatMenuModule,
    MatExpansionModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
  ],
  entryComponents: [
    HeaderComponent, 
    DialogSignIn,
    DialogMessage,
    DialogUpdateUserInfo,
    DialogUpdateCardInfo,
    InfoPageComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    OffersComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
