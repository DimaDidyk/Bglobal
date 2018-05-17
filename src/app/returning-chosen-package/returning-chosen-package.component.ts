import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { OffersComponent } from '../offers/offers.component';

@Component({
  selector: 'app-returning-chosen-package',
  templateUrl: './returning-chosen-package.component.html',
  styleUrls: ['./returning-chosen-package.component.scss']
})

export class ReturningChosenPackageComponent implements OnInit {

	constructor(private router: Router,
	 private offersComponent: OffersComponent,
	 private activatedRoute: ActivatedRoute,
	){
     // override the route reuse strategy
     this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }

     this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           window.scrollTo(0, 0);
        }
    });
  }

	// get all Slider Data
	offersComponentPackageData = this.offersComponent.sliderItems;
	// get active route
  routSnapshotPackage = this.activatedRoute.snapshot.params['package'];
  // get active package (slide) Data
  getSlidePackgeData = this.offersComponent.getSlideData(this.routSnapshotPackage);

  currentUrlPage = this.router.routerState.snapshot.url;

  // if puth is change package == 1
  getActiveChangePacckage(){
    if( this.currentUrlPage.search('change-package') == -1 ){
      return true;   
    }else{
      return false;  
    }
  }

  ngOnInit() {

  }

  // link to the page change package
  changePackageLink(){
    this.router.navigate( ['sim-order', this.routSnapshotPackage, 'change-package' ] );
  }

}
