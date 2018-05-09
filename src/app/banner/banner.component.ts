import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

	constructor( public route: ActivatedRoute ) {
	    console.log(route.pathFromRoot[1].snapshot.url[0].path);
	    console.log(route.pathFromRoot[1].snapshot.routeConfig.path);
	}

	routeCurrent = this.route.pathFromRoot[1].snapshot.routeConfig.path;

	routeData = [
		{route: "sim-order",
		  bannerText: 'סים אחד לכל החיים  ',
		  headlineTitle: 'בחירת כרטיס סים  ',
		  urlImage: './assets/img/page-banner.jpg'
		},
		{route: "user/sim",
		  bannerText: 'סים אחד לכל החיים  ',
		  headlineTitle: 'כרטיסי סים שלי  ',
		  urlImage: './assets/img/page-banner.jpg'
		},
	]

	getCurrentData(){
		for (var i = this.routeData.length - 1; i >= 0; i--) {
			if(this.routeData[i].route == this.routeCurrent ){
				return this.routeData[i];
			}
		}
	}

	ngOnInit() {
	}

}
