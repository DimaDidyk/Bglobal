import { Component, OnInit, Input, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormControl, FormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { SearchAddressPipe } from '../search-address.pipe';


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

	test:string = 'test';
	addresses = [
		'demo',
		'test',
		'test 1',
		'test 11',
		'test 111',
		'test 2',
		'test 3',
		'test 4',
		'test 5',
		'test 6',
		'test 7',
		'test 8',
		'תובת כשלהי, עיר  ',
		'תובת כשלהי, עיר  ',
		'תובת כשלהי, עיר  ',
		'תובת כשלהי, עיר  ',
	]


	constructor() { }

	ngOnInit() {
	}

}
