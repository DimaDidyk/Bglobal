import { Component, OnInit, Input ,Injectable, ViewChild, ElementRef } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

import { Router, ActivatedRoute, NavigationEnd, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { PackagesResponse } from "../entity/package";

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
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
	@Input() packagesResponse:PackagesResponse;
	@Input() flyFormValue;
	@Input() packagesResponseLength;

	// slider config
	index = 0;
	public config: SwiperConfigInterface = {
		direction: 'horizontal',
		initialSlide: 1,
		// init: false,
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
		// console.log( index );
	}
	// show and hide arrows slider
	public nextSlide(speed: number): void{
		this.componentRef.directiveRef.nextSlide(speed);
	}
	public prevSlide(speed: number): void{
		this.componentRef.directiveRef.prevSlide(speed);
	}


	replaceSpace(str) {
		str = str.replace(/ /ig, '-');
		return str;
	}

	// get current counties
	@ViewChild('flyFormCountries') flyFormCountries: ElementRef;
	routPackage( packageData ){
		console.log( packageData );
		console.log( packageData['Name'] );
    	localStorage.setItem('packageData', JSON.stringify(packageData));
    	
    	// this.flyFormStor = JSON.parse(localStorage.getItem('flyFormValue'));
		this.router.navigate([ 'sim-order', this.replaceSpace( packageData['Name'] ) ]);
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
	
	initSlider(){
  		// this.componentRef.directiveRef.update();
		  // console.log( 'this' );
  		if( this.packagesResponseLength != 0 ){
			this.componentRef.directiveRef.update();
  		}
	}

	ngOnInit() {
		// arrow on mobile
		
		
		if( window.innerWidth < 768 ){
			this.hidePrev = true;
		}
		// setInterval(function(){
		// }, 100);
	}
}