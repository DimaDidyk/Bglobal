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
	){}

	ngOnInit() {
    // scroll to top
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

	// get all Slider Data
	offersComponentPackageData = this.offersComponent.sliderItems;
	// get active route
  routSnapshotPackage = this.activatedRoute.snapshot.params['package'];
  // get active package (slide) Data
  getSlidePackgeData = this.offersComponent.getSlideData(this.routSnapshotPackage);

}
