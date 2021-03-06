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

	constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private offersComponent: OffersComponent,
  ){}

	// get active route
  routSnapshotPackage = this.activatedRoute.snapshot.params['package'];
  // get active package (slide) Data
  getSlidePackgeData = JSON.parse(localStorage.getItem('packageData'));

  currentUrlPage = this.router.routerState.snapshot.url;

  packageRouteName = this.activatedRoute.snapshot.params['package'];


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
    document.getElementsByClassName('hedline')[0].scrollIntoView({ behavior: "smooth", block: "start" });

    // go home if data invalid
    if( 
      this.getSlidePackgeData == undefined || 
      this.offersComponent.replaceSpace( this.getSlidePackgeData['Name']) != this.packageRouteName
    ){
      this.router.navigate( [''] );
    }
  }


  // link to the page change package
  changePackageLink(){
    this.router.navigate( ['sim-order', this.routSnapshotPackage, 'change-package' ] );
  }

  // hiden offers component
  isShow = 'hide';
  // scroll animate
  scrollAnimate(element) {
    this.isShow = 'show';
    setTimeout(function(){
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250)
  }

}
