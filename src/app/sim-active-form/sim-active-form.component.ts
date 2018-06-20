import { Component, OnInit, Input, Inject } from '@angular/core';

import { NgForm, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';

import { toggleHeight } from '../animation';


@Component({
	selector: 'app-sim-active-form',
	templateUrl: './sim-active-form.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./sim-active-form.component.scss']
})
export class SimActiveFormComponent implements OnInit {

	minDate = new Date(); //today
	daydiff(first, second) {
	    return Math.round((second-first)/(1000*60*60*24));
	}

	@Input() clientInfoFormData: string;

	// show animation
	isShow = 'hide';
	onSubmit(simAcriveFrom: NgForm) {
		this.isShow = 'show';
		console.log(this.isShow);
	}

	// scroll animate
	scrollAnimate(element) {
		setTimeout(function(){
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 250)
	}

	constructor( 
	 private adapter: DateAdapter<any>,
	 private picker: MatDatepickerModule ) {}

	ngOnInit() {
		this.adapter.setLocale('he'); //date format
	}

}
