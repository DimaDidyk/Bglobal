import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// anumation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// materual
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';

// ngx-swiper-wrapper
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FlyFormComponent } from './fly-form/fly-form.component';


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
    FlyFormComponent
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
    MatInputModule
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
