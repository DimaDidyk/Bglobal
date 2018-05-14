import { Component, OnInit, Input, Inject } from '@angular/core';

import { NgForm, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { toggleHeight } from '../animation';

@Component({
	selector: 'app-delivery',
	templateUrl: './delivery.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

	@Input() clientInfoFormData: string;

	// show animation
	isShow = 'hide';
	onSubmit(clientInfoForm: NgForm) {
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
