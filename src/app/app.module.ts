import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// anumation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// materual
import { 
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
 MatFormFieldModule } from '@angular/material';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

// main componenrts
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// ngx-swiper-wrapper
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    SimOrderPageComponent
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
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
