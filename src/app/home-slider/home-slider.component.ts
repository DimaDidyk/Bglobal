import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  // slider config
  index = 0;
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: true,
    effect: 'fade',
    autoplay: {
      delay: 2000,
    },
  };


  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  public textAnimate(selector:string): void{
    let index = this.index;

    let selectors = document.getElementsByClassName(selector);

    for (let i = selectors.length - 1; i >= 0; i--) {
      selectors[i].classList.remove('slide-animate-text');
    }

    selectors[index].classList.add('slide-animate-text');
  }
   

  // slider content
  sliderItems = [
    {'text-slide': 'סים אחד לכל החיים', 'url-image': './assets/img/banner.jpg'},
    {'text-slide': '2 סים אחד לכל החיים', 'url-image': './assets/img/page-banner.jpg'},
    {'text-slide': '3 סים אחד לכל החיים', 'url-image': './assets/img/banner.jpg'},
    {'text-slide': '4 סים אחד לכל החיים', 'url-image': './assets/img/page-banner.jpg'},
  ];

  // headline
  headlineTitle = 'טסים לחו״ל?';
  headlineSubTitle = 'מזמינים מראש כרטיס SIM עם חבילת גלישה ונהנים מהמחיר הזול ביותר במעל 100 מדינות!';

  constructor() {}

  ngOnInit() {}

}
