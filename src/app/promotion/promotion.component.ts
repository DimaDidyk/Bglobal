import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})

export class PromotionComponent implements OnInit {

	@Input() FlyForm: string;
	constructor() { }

	ngOnInit() {
	}

	scrollAnimate(element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}

}
