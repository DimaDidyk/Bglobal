import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { OffersComponent } from '../offers/offers.component';
import { toggleHeight } from '../animation';

@Component({
  selector: 'app-returning-chosen-package',
  templateUrl: './returning-chosen-package.component.html',
  animations: [
    toggleHeight
  ],
  styleUrls: ['./returning-chosen-package.component.scss']
})

export class ReturningChosenPackageComponent implements OnInit {
  @ViewChild("returning", {read: ElementRef}) returning: ElementRef;

	constructor(private router: Router,
	 private offersComponent: OffersComponent,
	 private activatedRoute: ActivatedRoute,
	){
    // override the route reuse strategy
    // this.router.routeReuseStrategy.shouldReuseRoute = function(){
    //   return false;
    // }

    // this.router.events.subscribe((evt) => {
    //   if (evt instanceof NavigationEnd) {
    //     // trick the Router into believing it's last link wasn't previously loaded
    //     this.router.navigated = false;
    //     // if you need to scroll back to top, here is the right place
    //     this.returning.nativeElement.scrollTo(0, 0);
    //   }
    // });
  }

	// get all Slider Data
	offersComponentPackageData = this.offersComponent.sliderItems;
	// get active route
  routSnapshotPackage = this.activatedRoute.snapshot.params['package'];
  // get active package (slide) Data
  getSlidePackgeData = this.offersComponent.getSlideData(this.routSnapshotPackage);

  currentUrlPage = this.router.routerState.snapshot.url;

  getActiveFromData = this.offersComponent.getActiveFromData();

  // if puth is change package == 1
  getActiveChangePacckage(){
    if( this.currentUrlPage.search('change-package') == -1 ){
      return true;   
    }else{
      return false;  
    }
  }

  ngOnInit() {
    // scroll animate
    this.returning.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  
  // link to the page change package
  changePackageLink(){
    
    this.router.navigate( ['sim-order', this.routSnapshotPackage, 'change-package' ] );
  }

  isShow = 'hide';
  // scroll animate
  scrollAnimate(element) {
    this.isShow = 'show';
    setTimeout(function(){
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250)
  }

}
