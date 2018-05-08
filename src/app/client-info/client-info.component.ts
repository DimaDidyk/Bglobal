import { Component, OnInit, Input, Inject } from '@angular/core';

import { NgForm, FormsModule, FormControl, Validators, PatternValidator } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { toggleHeight } from '../animation';
import { SimOrderPageComponent } from '../sim-order-page/sim-order-page.component';

@Component({
	selector: 'app-client-info',
	templateUrl: './client-info.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./client-info.component.scss'],
})


export class ClientInfoComponent implements OnInit {

	// get data from Sim
	@Input() formSimData: string;

	emailPattern = "[^ @]*@[^ @]*";

	numberTel_keyPress(event: any) {
	    const pattern = /[0-9/+/ /(/)/]/;
	    let inputChar = String.fromCharCode(event.charCode);

	    if (!pattern.test(inputChar)) {
	      // invalid character, prevent input
	      event.preventDefault();
	    }
	}

	isChecked:boolean = false;

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
