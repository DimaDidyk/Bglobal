import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
	
	// slider config
	index = 0;
	public config: SwiperConfigInterface = {
		direction: 'horizontal',
		slidesPerView: 3,
		spaceBetween: 30,
		keyboard: true,
		breakpoints:{
			768: {
			  slidesPerView: 1,
			},
			992: {
			  slidesPerView: 2,
			},
		}
		// navigation: true,
	};

	@ViewChild(SwiperComponent) componentRef: SwiperComponent;
	@ViewChild(SwiperDirective) directiveRef: SwiperDirective;

	
	public nextSlide(speed: number): void{
		this.componentRef.directiveRef.nextSlide(speed);
	}
	public prevSlide(speed: number): void{
		this.componentRef.directiveRef.prevSlide(speed);
	}

	// slider content
	sliderItems = [
		{ 
			'title': '8GB',
			'sub-title': 'גלישה ושיחות',
			'price': '189',
			'days': '30 ימים',
			'info': 'רשת At&t שיחות יוצאות ונכנסות ללא הגבלה שמירה על המספר הישראלי'
		},
		{ 
			'title': 'UNLIMITED',
			'sub-title': 'גלישה ושיחות',
			'price': '29',
			'days': 'ליום',
			'info': '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים'
		},
		{ 
			'title': '1GB',
			'sub-title': 'גלישה ושיחות',
			'price': '99',
			'days': '30 ימים',
			'info': '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים'
		},
		{ 
			'title': '8GB',
			'sub-title': 'גלישה ושיחות',
			'price': '189',
			'days': '30 ימים',
			'info': 'רשת At&t שיחות יוצאות ונכנסות ללא הגבלה שמירה על המספר הישראלי'
		},
		{ 
			'title': 'UNLIMITED',
			'sub-title': 'גלישה ושיחות',
			'price': '29',
			'days': 'ליום',
			'info': '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים'
		},
		{ 
			'title': '1GB',
			'sub-title': 'גלישה ושיחות',
			'price': '99',
			'days': '30 ימים',
			'info': '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים'
		},
	];

	constructor() { }

	ngOnInit() {

	}

}
