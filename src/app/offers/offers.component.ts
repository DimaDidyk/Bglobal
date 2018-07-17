import { Component, OnInit, Input ,Injectable, ViewChild, ElementRef } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

import { Router, ActivatedRoute, NavigationEnd, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})

@Injectable()
export class OffersComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router
	){}
	@ViewChild(SwiperComponent) componentRef: SwiperComponent;
	@ViewChild(SwiperDirective) directiveRef: SwiperDirective;

	// get fly from data
	@Input() flyFormValue: string;

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
			  initialSlide: 1,
			},
			992: {
			  slidesPerView: 2,
			},
		},
	};

	// show and hide arrows slider
	hideNext = true;
	hidePrev = false;
	public onIndexChange(index: number): void {
		this.hideNext = !this.componentRef.directiveRef.swiper().isEnd;
		this.hidePrev = !this.componentRef.directiveRef.swiper().isBeginning;
	}
	// show and hide arrows slider
	public nextSlide(speed: number): void{
		this.componentRef.directiveRef.nextSlide(speed);
	}
	public prevSlide(speed: number): void{
		this.componentRef.directiveRef.prevSlide(speed);
	}

	// slider content
	// colors: blue-dark, orange, blue, yellow-green, pink, purple
	sliderItems = [
		{
			'rout':      'package-USA',
			'color':     'blue-dark',
			'title':     '8GB',
			'sub-title': 'גלישה ושיחות',
			'price':     '189',
			'days':      '30 ימים',
			'info':      'רשת At&t שיחות יוצאות ונכנסות ללא הגבלה שמירה על המספר הישראלי',
			'name':      'חבילת גלישה לספרד  ',
			'options': [
				'ניתן לטעינות חוזרת בכל עת  ',
				'גלישה במהירות מירבית  ',
				'ים אחד לכל החיים!  ',
			],
			'desc'     : 'חבילה כוללת גלישה ללא הגבלה במדיונת ספרד. בשביל להפעיל את הכרטיס סים וחבילה לך למלא פרטים ולבחור כתובת לשמשוח',
		},
		{
			'rout':      'returning-customer',
			'color':     'orange',
			'title':     'UNLIMITED',
			'sub-title': 'גלישה ושיחות',
			'price':     '29',
			'days':      'ליום',
			'info':      '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים',
			'name':      'ח  בילת גלישה לספרד  ',
			'popular':   true,
			'economic':  false,
			'options': [
				'ניתן לטעינות חוזרת בכל עת  ',
				'גלישה במהירות מירבית  ',
				'ים אחד לכל החיים!  ',
			],
			'desc': '     חבילה כוללת גלישה ללא הגבלה במדיונת ספרד. בשביל להפעיל את הכרטיס סים וחבילה לך למלא פרטים ולבחור כתובת לשמשוח',
		},
		{ 
			'rout':      'returning-customer-test2',
			'color':     'blue',
			'title':     '1GB',
			'sub-title': 'גלישה ושיחות',
			'price':     '99',
			'days':      '30 ימים',
			'info':      '!ניתן לטעינות חוזרת בכל עת גלישה במהירות מירבית סים אחד לכל החיים',
			'name':      'חבילת גלישה לספרד  ',
			'economic':  true,
			'options': [
				'ניתן לטעינות חוזרת בכל עת  ',
				'גלישה במהירות מירבית  ',
				'ים אחד לכל החיים!  ',
			],
			'desc':      'חבילה כוללת גלישה ללא הגבלה במדיונת ספרד. בשביל להפעיל את הכרטיס סים וחבילה לך למלא פרטים ולבחור כתובת לשמשוח',
		},
		{ 
			'rout':      'returning-customer-test3',
			'color':     'yellow-green',
			'title':     '8GB',
			'sub-title': 'גלישה ושיחות',
			'price':     '189',
			'days':      '30 ימים',
			'info'     : 'רשת At&t שיחות יוצאות ונכנסות ללא הגבלה שמירה על המספר הישראלי',
			'name':      'חבילת גלישה לספרד  ',
			'options': [
				'ניתן לטעינות חוזרת בכל עת  ',
				'גלישה במהירות מירבית  ',
				'ים אחד לכל החיים!  ',
			],
			'desc'     : 'חבילה כוללת גלישה ללא הגבלה במדיונת ספרד. בשביל להפעיל את הכרטיס סים וחבילה לך למלא פרטים ולבחור כתובת לשמשוח',
		},
		{ 
			'rout':      'returning-customer-test4',
			'color':     'pink',
			'title':     '8GB',
			'sub-title': 'גלישה ושיחות',
			'price':     '189',
			'days':      '30 ימים',
			'info'     : 'רשת At&t שיחות יוצאות ונכנסות ללא הגבלה שמירה על המספר הישראלי',
			'name':      'חבילת גלישה לספרד  ',
			'options': [
				'ניתן לטעינות חוזרת בכל עת  ',
				'גלישה במהירות מירבית  ',
				'ים אחד לכל החיים!  ',
			],
			'desc'     : 'חבילה כוללת גלישה ללא הגבלה במדיונת ספרד. בשביל להפעיל את הכרטיס סים וחבילה לך למלא פרטים ולבחור כתובת לשמשוח',
		},
		{ 
			'rout':      'returning-customer-test5',
			'color':     'purple',
			'title':     '8GB',
			'sub-title': 'גלישה ושיחות',
			'price':     '189',
			'days':      '30 ימים',
			'info'     : 'רשת At&t שיחות יוצאות ונכנסות ללא הגבלה שמירה על המספר הישראלי',
			'name':      'חבילת גלישה לספרד  ',
			'options': [
				'ניתן לטעינות חוזרת בכל עת  ',
				'גלישה במהירות מירבית  ',
				'ים אחד לכל החיים!  ',
			],
			'desc'     : 'חבילה כוללת גלישה ללא הגבלה במדיונת ספרד. בשביל להפעיל את הכרטיס סים וחבילה לך למלא פרטים ולבחור כתובת לשמשוח',
		},
	];

	// get slude data
	getSlideData(rout:string){
		return this.sliderItems.find(sliderItems => sliderItems.rout == rout);
	}

	// get current counties
	@ViewChild('flyFormCountries') flyFormCountries: ElementRef;
	routPackage(slideData:object){
		this.router.navigate( ['sim-order', slideData['rout']]);
		// reload
		this.router.routeReuseStrategy.shouldReuseRoute = function(){
		    return false;
		};
		this.router.events.subscribe((evt) => {
		    if (evt instanceof NavigationEnd) {
		        this.router.navigated = false;
		        window.scrollTo(0, 0);
		    }
		});
	}

	ngOnInit() {
		// arrow on mobile
		if( window.innerWidth < 768 ){
			this.hidePrev = true;
		}
	}

}
