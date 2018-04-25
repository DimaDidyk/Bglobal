import { Component, OnInit } from '@angular/core';
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
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: true,
    loop: true,
    effect: 'fade' 
  };

  // slider content
  sliderItems = [
    {'text-slide': 'סים אחד לכל החיים', 'url-image': './assets/img/banner.jpg'},
    {'text-slide': '2 סים אחד לכל החיים', 'url-image': './assets/img/banner.jpg'},
    {'text-slide': '3 סים אחד לכל החיים', 'url-image': './assets/img/banner.jpg'},
  ];

  // headline
  headlineTitle = 'טסים לחו״ל?';
  headlineSubTitle = 'מזמינים מראש כרטיס SIM עם חבילת גלישה ונהנים מהמחיר הזול ביותר במעל 100 מדינות!';

  constructor() {}

  ngOnInit() {}

}
