import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// materual
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
// anumation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Mask input
import { NgxMaskModule } from 'ngx-mask';
// ngx-swiper-wrapper
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
// routing
import { AppRoutingModule } from './/app-routing.module';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AdditionallyComponent } from './additionally/additionally.component';
// main componenrts
import { AppComponent } from './app.component';
import { AvailableCountriesComponent } from './available-countries/available-countries.component';
import { BannerComponent } from './banner/banner.component';
import { ChosenPackageComponent } from './chosen-package/chosen-package.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FlyFormComponent } from './fly-form/fly-form.component';
import { FooterComponent } from './footer/footer.component';
import { FormSimComponent } from './form-sim/form-sim.component';
import { DialogMessage, DialogSignIn, HeaderComponent } from './header/header.component';
import { HomaPageComponent } from './homa-page/homa-page.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { DialogUpdateCardInfo, DialogUpdateUserInfo, InfoPageComponent } from './info-page/info-page.component';
import { OffersComponent } from './offers/offers.component';
import { PaymentComponent } from './payment/payment.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ReturningChosenPackageComponent } from './returning-chosen-package/returning-chosen-package.component';
import { ReturningCustomerPageComponent } from './returning-customer-page/returning-customer-page.component';
import { SearchAddressPipe } from './search-address.pipe';
import { HttpService } from './services/http.service';
import { SimActiveFormComponent } from './sim-active-form/sim-active-form.component';
import { SimOrderPageComponent } from './sim-order-page/sim-order-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { TotalComponent } from './total/total.component';
import { UsageLogComponent } from './usage-log/usage-log.component';
import { UserPageSimComponent } from './user-page-sim/user-page-sim.component';
import { UserPageComponent } from './user-page/user-page.component';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NotFoundComponent } from './not-found/not-found.component';
import { PackagesComponent } from './packages/packages.component';

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
    NotFoundComponent,
    PackagesComponent,
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
    GooglePlaceModule, 
    BrowserModule, 
    FormsModule,
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
    HeaderComponent,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
