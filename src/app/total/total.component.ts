import { Component, OnInit, Input, Inject } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { toggleHeight } from '../animation';

@Component({
	selector: 'app-total',
	templateUrl: './total.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./total.component.scss']
})

export class TotalComponent implements OnInit {

	@Input() additionallyFromData: string;
	@Input() deliveryFormData: string;

	// show animation
	isShow = 'hide';
	onSubmit(totalForm: NgForm) {
		this.isShow = 'show';
		console.log(this.isShow);
	}
	
	// scroll animate
	scrollAnimate(element) {
		setTimeout(function(){
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 250)
	}
	
	constructor() { }

	ngOnInit() {
	}

}
