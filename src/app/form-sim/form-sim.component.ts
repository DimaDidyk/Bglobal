import { Component, OnInit, Input } from '@angular/core';

import { NgForm, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { toggleHeight } from '../animation';
import { ClientInfoComponent } from '../client-info/client-info.component';


@Component({
	selector: 'app-form-sim',
	templateUrl: './form-sim.component.html',
	animations: [
		toggleHeight
	],
	styleUrls: ['./form-sim.component.scss']
})


export class FormSimComponent implements OnInit {
	isShow = 'hide';

	simcards = [
		{value: 'כרטיס סים כלשהו'},
		{value: 'כרטיס סים כלשהו'},
		{value: 'כרטיס סים כלשהו'}
	];

	onSubmit(formSim: NgForm) {
		if( formSim.valid && formSim.submitted ){
			this.isShow = 'show';
		}
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
