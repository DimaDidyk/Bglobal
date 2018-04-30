import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

	urlImage = './assets/img/page-banner.jpg'
	bannerText = 'סים אחד לכל החיים';

	// headline
	headlineTitle = 'בחירת כרטיס סים';

	constructor() { }

	ngOnInit() {
	}

}
